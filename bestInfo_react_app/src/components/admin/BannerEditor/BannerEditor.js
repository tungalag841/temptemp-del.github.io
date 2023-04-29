import React, { useState } from 'react';
import { AiFillStop } from "react-icons/ai";
import Button from '../../admin/UI/Button/Button';
import {useAddNewBannerMutation } from '../../../store/adminApiSlice';
import "./BannerEditor.css"

const Banners = ({bannerSingle}) => {
  const [values, setValues] = useState(
    (bannerSingle) ?
    bannerSingle:
      {
        id: null,
        title: "",
        image:"",
        category: "",
        file: "",
        photo: null
      }
  );
  const [addNewBanner, {isLoading}] = useAddNewBannerMutation()
  const canSave = [values.title].every(Boolean) && !isLoading
  const handleSubmit = async () => {
    const formData = new FormData();
    if (window.location.pathname.split("/")[3]) {
      formData.append("id", window.location.pathname.split("/")[3]);
    } 
    formData.append("title", values.title);
    formData.append("image", values.image);
    formData.append("file", values.file);
    formData.append("category", values.category);
    formData.append("token", localStorage.getItem('token'));

    // for (var pair of formData.entries()) {
    //   console.log("A1", pair[0] + ', ' + pair[1]);
    // }
    if (canSave) {
      try {
        await addNewBanner(formData).unwrap()
        window.location.replace("/admin/banneradd")

      } catch (err) {
        console.error('Failed to save the banner: ', err)
      }
    };
  }

  const handleDelete = async () => {
    const formData = new FormData();
    let getID = window.location.pathname.split("/")[3];
    if (getID) {
      formData.append("id", values.id);
      formData.append("token",localStorage.getItem("token"))
    }
    try {
      await addNewBanner(formData).unwrap()
      window.location.replace("/admin/banneradd")
    } catch (err) {
      console.error('error: ', err)
    }
  }

  const handleTitleChange = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setValues({ ...values, category: e.target.value});
  }
  const fileSelectedHandler = (e) => {
    setValues({
      ...values,
      file: e.target.files[0],
      photo: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null,
    });
  };
  const getPhoto = () => {
    if (values.photo) {
      return values.photo
    } else {
      return values.image;
    }
  };
  return (
    <section className='Admin-section-20'>
      <div className='Admin-div-10'>
        <div>
          <input
            placeholder="Гарчиг"
            name="title"
            type="text"
            onChange={handleTitleChange}
            value={values.title}
          />
          <select
            id="gt"
            form="category"
            name="category"
            value = {values.category}
            onChange={handleCategoryChange}
            >
            <option value='{"name":"Ангилал", "number":0}'>Ангилал</option>
            <option value='А'>Нүүр-А</option>
            <option value='B1'>Нүүр-B1</option>
            <option value='B2'>Нүүр-B2</option>
            <option value='B3'>Нүүр-B3</option>
            <option value='B4'>Нүүр-B4</option>
            <option value='C'>Категор-C</option>
            <option value='D1'>Мэдээ-D1</option>
            <option value='D2'>Мэдээ-D2</option>
            <option value='G'>G</option>
          
          </select>
          <div>
            <label htmlFor="files" className="btn">ЗУРАГ ОРУУЛАХ</label>
            <input id="files"
              style={{ visibility: 'hidden' }}
              onChange={fileSelectedHandler} 
              type="file" />
          </div>
          <div>
            <figure className="photo_figure">
              {values.file || values.image ? (
                <img className="photo_img"
                  src={getPhoto()}
                  alt="empty"
                 />
              ) : (
                <AiFillStop size={100} color="#dcdcdc" />
              )}
            </figure>
        </div>
        </div>
      </div>
      {(bannerSingle) ?
        <div>
          <Button clicked={handleDelete}>УСТГАХ</Button>
          <Button clicked={handleSubmit}>ЗАСАХ</Button>
        </div> :
        <Button clicked={handleSubmit} disabled={!canSave}>НИЙТЛЭХ</Button>
      }
      <div>
        <p>Нүүр хуудасны хэвтээ баннер</p>
        <p>Нүүр-А: Урт-1000px Өргөн-130px</p>
        <p>Нүүр-B1: Урт-940px Өргөн-150px</p>
        <p>Нүүр-B2: Урт-940px Өргөн-150px</p>
        <br/>
        <p>Нүүр хуудасны хажуу баннер</p>
        <p>Нүүр-B3: Урт-160px Өргөн-500px</p>
        <p>Нүүр-B4: Урт-160px Өргөн-500px</p>
        <br/>
        <p>Мэдээны хуудасны баннер</p>
        <p>Нүүр-D1: Урт-990px Өргөн-150px</p>
        <p>Нүүр-D2: Урт-990px Өргөн-150px</p>
      </div>
    </section>
  )
}
export default Banners;


