import { useState } from 'react';

import { updateObject, checkValidity } from '../../../helpers/utility';
import Button from '../../../components/admin/UI/Button/Button';
import Input from '../../../components/admin/UI/Input/Input';
import { useGetLoginMutation } from '../../../store/authSlice';

import './Auth.css';

const Auth = () => {

  const [getLogin, data] = useGetLoginMutation()

  const [controls, setControls] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Имэйл хаяг',
        id: 'email',
      },
      touched: false,
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Нууц үг',
        id: 'password',
      },
      touched: false,
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
    },
  });

  const inputChangeHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation,
        ),
        touched: true,
      }),
    });
    setControls(updatedControls);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await getLogin(controls).unwrap()
        .then(data => {
          const expirationDate = new Date(
            new Date().getTime() + data.expiresIn * 1000,
          );
          localStorage.setItem('token', data.token);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', data.email);
          window.location.reload();
        })
    } catch (err) {
      console.error(err)
    }
  }

  const formElementsArray = [];

  Object.keys(controls).map((key) => {
    return formElementsArray.push({
      id: key,
      config: controls[key],
    });
  });

  const form = formElementsArray.map((formElement) => (
    <Input
      changed={(event) => inputChangeHandler(event, formElement.id)}
      elementConfig={formElement.config.elementConfig}
      elementType={formElement.config.elementType}
      invalid={!formElement.config.valid}
      key={formElement.id}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      value={formElement.config.value}
    />
  ));

  return (
    <div className='Auth'>
        <form onSubmit={handleSubmit}>
          {form}
          <Button type="submit" btnType="Success">
            Нэвтрэх
          </Button>
        </form>
    </div>
  );
};

export default Auth;
