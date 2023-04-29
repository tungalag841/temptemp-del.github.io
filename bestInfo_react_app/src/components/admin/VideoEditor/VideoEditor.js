import React, { useState } from 'react';
import { useAddNewVideoMutation } from '../../../store/adminApiSlice'
import Button from '../../../components/admin/UI/Button/Button';

import "./VideoEditor.css"

const Videos = ({ videoSingle }) => {
  const [values, setValues] = useState(
    (videoSingle) ?
      videoSingle
      :
      {
        id: null,
        title: "",
        text: ""
      }
  );

  const [addNewVideo, { isLoading }, ] = useAddNewVideoMutation();

  const onTitleChanged = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const onTextChanged = (e) => {
    setValues({ ...values, text: e.target.value });
  };

  const canSave = [values.title, values.text].every(Boolean) && !isLoading

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await addNewVideo(values).unwrap()
        window.location.replace('/admin/videoadd');


      } catch (err) {
        console.error('Failed to save the video: ', err)
      }
    };
  }

  const handleDelete = async () => {
    try {
      await addNewVideo(JSON.parse(`{"id": ${window.location.pathname.split("/")[3]}}`)).unwrap();
      window.location.replace('/admin/videoadd');
    } catch (err) {
      console.error('Failed to save the video: ', err)
    }
  }

  return (
    <section className='Admin-section-20'>
      <div className='Admin-div-10'>
        <div>
          <input
            placeholder="Гарчиг"
            name="title"
            type="text"
            onChange={onTitleChanged}
            value={values.title}
          />
          <input
            placeholder="Линк:"
            name="link"
            type="text"
            onChange={onTextChanged}
            value={values.text}
          />
        </div>
      </div>
      {(videoSingle) ?
        <div>
          <Button clicked={handleDelete}>УСТГАХ</Button>
          <Button clicked={handleSubmit}>ЗАСАХ</Button>
        </div> :
        <Button clicked={handleSubmit} disabled={!canSave}>НИЙТЛЭХ</Button>
      }
    </section>
  )
}

export default Videos;


