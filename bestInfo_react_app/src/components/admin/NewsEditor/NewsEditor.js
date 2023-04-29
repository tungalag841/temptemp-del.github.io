import React, { useState } from 'react';
import { useAddNewPostMutation } from '../../../store/adminApiSlice'
import { AiFillStop } from "react-icons/ai";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import Button from '../../../components/admin/UI/Button/Button';

import './NewsEditor.css';

const News = ({ newsSingle }) => {
  const [values, setValues] = useState(
    newsSingle ?
      newsSingle
      :
      {
        id: "",
        title: "",
        categoryid: 0,
        categoryname: "",
        radio: false,
        type: 0,
        file: "",
        text: "",
        isLoaded: false,
        photo: null,
        image: "",
        che: null,
        publisher: ""
      }
  );

  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const canSave = [values.title, values.categoryid, values.categoryname, values.text].every(Boolean) && !isLoading

  const handleSubmit = async () => {
    const formData = new FormData();
    if (window.location.pathname.split("/")[3]) {
      formData.append("id", window.location.pathname.split("/")[3]);
    }
    formData.append("title", values.title);
    formData.append("che", values.che);
    formData.append("category", values.categoryid);
    formData.append("categoryname", values.categoryname);
    formData.append("news", values.text);
    formData.append("image", values.image);
    formData.append("file", values.file);
    formData.append("token", localStorage.getItem('token'));

    // for (var pair of formData.entries()) {
    //   console.log("A1", pair[0] + ', ' + pair[1]);
    // }

    if (canSave) {
      try {
        await addNewPost(formData).unwrap()
        window.location.replace('/admin/newsadd');
      } catch (err) {
        console.error('Failed to save the post: ', err)
      }
    }
  }

  const handleDelete = async () => {
    const formData = new FormData();
    let getID = window.location.pathname.split("/")[3];
    if (getID) {
      formData.append("id", values.id);
      formData.append("token", localStorage.getItem('token'));
    }
    try {
      await addNewPost(formData).unwrap()
      window.location.replace("/admin/newsadd")
    } catch (err) {
      console.error('Failed to save the post: ', err)
    }
  }

  const editorConfiguration = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    filebrowserBrowseUrl: "https://bestinfo.mn/backend/admin/ckeditorimage",
    removePlugins: ["MediaEmbedToolbar"],
    image: {
      // Configure the available styles.
      styles: ["alignLeft", "alignCenter", "alignRight"],
      toolbar: [
        "imageStyle:alignLeft",
        "imageStyle:alignCenter",
        "imageStyle:alignRight",
      ],

    },
  };

  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader)
    }
  };

  class MyUploadAdapter {
    constructor(loader) {
      this.loader = loader;
      this.url = `https://bestinfo.mn/backend/admin/ckeditorimage`;
    }

    // Starts the upload process.
    upload() {
      return new Promise((resolve, reject) => {
        this._initRequest();
        this._initListeners(resolve, reject);
        this._sendRequest();
      });
    }

    // Aborts the upload process.
    abort() {
      if (this.xhr) {
        this.xhr.abort();
      }
    }

    // Example implementation using XMLHttpRequest.
    _initRequest() {
      const xhr = this.xhr = new XMLHttpRequest();

      xhr.open('POST', this.url, true);
      xhr.responseType = 'json';
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
      // xhr.setRequestHeader('Authorization', getToken())
    }

    // Initializes XMLHttpRequest listeners.
    _initListeners(resolve, reject) {
      const xhr = this.xhr;
      const loader = this.loader;
      const genericErrorText = `Couldn't upload file: ${loader.file.name}.`;

      xhr.addEventListener('error', () => reject(genericErrorText));
      xhr.addEventListener('abort', () => reject());
      xhr.addEventListener('load', () => {
        const response = xhr.response;
        if (!response || response.error) {
          return reject(response && response.error ? response.error.message : genericErrorText);
        }
        // If the upload is successful, resolve the upload promise with an object containing
        // at least the "default" URL, pointing to the image on the server.
        resolve({
          default: response.url
        });
      });
      if (xhr.upload) {
        xhr.upload.addEventListener('progress', evt => {
          if (evt.lengthComputable) {
            loader.uploadTotal = evt.total;
            loader.uploaded = evt.loaded;
          }
        });
      }
    }

    // Prepares the data and sends the request.
    _sendRequest() {
      const data = new FormData();
      this.loader.file
        .then(result => {
          data.append("file", result);
          this.xhr.send(data);
        })
    }
  };

  let data;

  const handleTitleChange = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const handleCheChange = (e) => {
    setValues({ ...values, che: JSON.parse(e.target.value).number === 2 ? true : false });
  };

  const handleCategoryChange = (e) => {
    setValues({ ...values, categoryid: JSON.parse(e.target.value).number, categoryname: JSON.parse(e.target.value).name });

  };

  const fileSelectedHandler = (e) => {
    setValues({
      ...values,
      file: e.target.files[0],
      photo: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null,
    });
  };

  const getPhoto = () => {
    if (values.photo) {
      return values.photo;
    } else {
      return values.image;
    }
  };

  const onSubmit = (e) => {
    setValues({ ...values, text: data });
  };

  return (

    <>  
    {
      newsSingle ? (
        <section className='Admin-section-2'>
      <div className='Admin-div-1'>
        <div className='news-option'>
          <input
          className='selector'
            placeholder="Гарчиг"
            name="title"
            type="text"
            value={newsSingle.title}
            onChange={handleTitleChange}
          />
          <select
          className='selector'

            id="gt"
            form="category"
            name="che"
            value={
              {
                null: '{"name":"Энгийн/Онцлох", "number":0}',
                false: '{"name":" Энгийн мэдээ", "number":1}',
                true: '{"name":" Онцлох мэдээ", "number":2}'
              }[newsSingle.che]
            }
            onChange={handleCheChange}
          >
            <option value='{"name":"Энгийн/Онцлох", "number":0}'>Энгийн/Онцлох</option>
            <option value='{"name":" Энгийн мэдээ", "number":1}'>Энгийн мэдээ</option>
            <option value='{"name":" Онцлох мэдээ", "number":2}'>Онцлох мэдээ</option>
          </select>
          <select
          className='selector'

            id="gt"
            form="category"
            name="cate"
            onChange={handleCategoryChange}
            value={
              {
                0: '{"name":"Ангилал", "number":0}',
                1: '{"name":"Мэдээ", "number":1}',
                2: '{"name":"Ярилцлага", "number":2}',
                3: '{"name":"Сурвалжилга", "number":3}',
                4: '{"name":"Аян замын тэмдэглэл", "number":4}',
                5: '{"name":"Видео", "number":5}',
                6: '{"name":"Хөрөг найруулга", "number":6}',
                7: '{"name":"Өмгөөлөгчийн лавлагаа", "number":7}',
                8: '{"name":"Өмгөөлөгчийн зөвлөгөө", "number":8}',
                9: '{"name":"Асуудал дэвшүүлсэн өгүүлэл", "number":9}',
                10: '{"name":"Нийтлэл", "number":10}',
                11: '{"name":"Шүлэг, Яруу найраг", "number":11}',
                12: '{"name":"Өгүүллэг", "number":12}'
              }[newsSingle.categoryid]
            }
          >
            <option value='{"name":"Ангилал", "number":0}'>Ангилал</option>
            <option value='{"name":"Мэдээ", "number":1}'>Мэдээ</option>
            <option value='{"name":"Ярилцлага", "number":2}'>Ярилцлага</option>
            <option value='{"name":"Сурвалжилга", "number":3}'>Сурвалжилга</option>
            <option value='{"name":"Аян замын тэмдэглэл", "number":4}'>Аян замын тэмдэглэл</option>
            <option value='{"name":"Видео", "number":5}'>Видео</option>
            <option value='{"name":"Хөрөг найруулга", "number":6}'>Хөрөг найруулга</option>
            <option value='{"name":"Өмгөөлөгчийн лавлагаа", "number":7}'>Өмгөөлөгчийн лавлагаа</option>
            <option value='{"name":"Өмгөөлөгчийн зөвлөгөө", "number":8}'>Өмгөөлөгчийн зөвлөгөө</option>
            <option value='{"name":"Асуудал дэвшүүлсэн өгүүлэл", "number":9}'>Асуудал дэвшүүлсэн өгүүлэл</option>
            <option value='{"name":"Нийтлэл", "number":10}'>Нийтлэл</option>
            <option value='{"name":"Шүлэг, Яруу найраг", "number":11}'>Шүлэг, Яруу найраг</option>
            <option value='{"name":"Өгүүллэг", "number":12}'>Өгүүллэг</option>
          </select>
          <div>
            <label htmlFor="files" className="btn1">НҮҮР ЗУРАГ</label>
            <input id="files"
              style={{ visibility: 'hidden' }}
              onChange={fileSelectedHandler} type="file" />
          </div>
        </div>
        <div>
          <figure className="photo_figure">
          <img className="photo_img"
                src={newsSingle.image}
                alt="empty"
              />
            {/* { newsSingle.image ? (
             
            ) : (
              <AiFillStop size={100} color="#dcdcdc" />
            )} */}
          </figure>
        </div>
      </div>

      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={newsSingle.text}
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          data = editor.getData();
          // console.log({ event, editor, data });
          onSubmit();
        }}
        onBlur={(event, editor) => {
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      />
      {(newsSingle) ?
        <div><Button clicked={handleDelete}>УСТГАХ</Button>
          <Button clicked={handleSubmit}>ЗАСАХ</Button> </div> :
        <Button clicked={handleSubmit} disabled={!canSave}>НИЙТЛЭХ</Button>
      }
    </section>
      ):(
        <section className='Admin-section-2'>
      <div className='Admin-div-1'>
        <div className='news-option'>
          <input
          className='selector'
            placeholder="Гарчиг"
            name="title"
            type="text"
            value={values.title}
            onChange={handleTitleChange}
          />
          <select
          className='selector'

            id="gt"
            form="category"
            name="che"
            value={
              {
                null: '{"name":"Энгийн/Онцлох", "number":0}',
                false: '{"name":" Энгийн мэдээ", "number":1}',
                true: '{"name":" Онцлох мэдээ", "number":2}'
              }[values.che]
            }
            onChange={handleCheChange}
          >
            <option value='{"name":"Энгийн/Онцлох", "number":0}'>Энгийн/Онцлох</option>
            <option value='{"name":" Энгийн мэдээ", "number":1}'>Энгийн мэдээ</option>
            <option value='{"name":" Онцлох мэдээ", "number":2}'>Онцлох мэдээ</option>
          </select>
          <select
          className='selector'

            id="gt"
            form="category"
            name="cate"
            onChange={handleCategoryChange}
            value={
              {
                0: '{"name":"Ангилал", "number":0}',
                1: '{"name":"Мэдээ", "number":1}',
                2: '{"name":"Ярилцлага", "number":2}',
                3: '{"name":"Сурвалжилга", "number":3}',
                4: '{"name":"Аян замын тэмдэглэл", "number":4}',
                5: '{"name":"Видео", "number":5}',
                6: '{"name":"Хөрөг найруулга", "number":6}',
                7: '{"name":"Өмгөөлөгчийн лавлагаа", "number":7}',
                8: '{"name":"Өмгөөлөгчийн зөвлөгөө", "number":8}',
                9: '{"name":"Асуудал дэвшүүлсэн өгүүлэл", "number":9}',
                10: '{"name":"Нийтлэл", "number":10}',
                11: '{"name":"Шүлэг, Яруу найраг", "number":11}',
                12: '{"name":"Өгүүллэг", "number":12}'
              }[values.categoryid]
            }
          >
            <option value='{"name":"Ангилал", "number":0}'>Ангилал</option>
            <option value='{"name":"Мэдээ", "number":1}'>Мэдээ</option>
            <option value='{"name":"Ярилцлага", "number":2}'>Ярилцлага</option>
            <option value='{"name":"Сурвалжилга", "number":3}'>Сурвалжилга</option>
            <option value='{"name":"Аян замын тэмдэглэл", "number":4}'>Аян замын тэмдэглэл</option>
            <option value='{"name":"Видео", "number":5}'>Видео</option>
            <option value='{"name":"Хөрөг найруулга", "number":6}'>Хөрөг найруулга</option>
            <option value='{"name":"Өмгөөлөгчийн лавлагаа", "number":7}'>Өмгөөлөгчийн лавлагаа</option>
            <option value='{"name":"Өмгөөлөгчийн зөвлөгөө", "number":8}'>Өмгөөлөгчийн зөвлөгөө</option>
            <option value='{"name":"Асуудал дэвшүүлсэн өгүүлэл", "number":9}'>Асуудал дэвшүүлсэн өгүүлэл</option>
            <option value='{"name":"Нийтлэл", "number":10}'>Нийтлэл</option>
            <option value='{"name":"Шүлэг, Яруу найраг", "number":11}'>Шүлэг, Яруу найраг</option>
            <option value='{"name":"Өгүүллэг", "number":12}'>Өгүүллэг</option>
          </select>
          <div>
            <label htmlFor="files" className="btn1">НҮҮР ЗУРАГ</label>
            <input 
              id="files"
              style={{ visibility: 'hidden' }}
              onChange={fileSelectedHandler} type="file" 
              />
          </div>
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

      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={values.text}
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          data = editor.getData();
          // console.log({ event, editor, data });
          onSubmit();
        }}
        onBlur={(event, editor) => {
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      />
      {(newsSingle) ?
        <div><Button clicked={handleDelete}>УСТГАХ</Button>
          <Button clicked={handleSubmit}>ЗАСАХ</Button> </div> :
        <Button clicked={handleSubmit} disabled={!canSave}>НИЙТЛЭХ</Button>
      }
    </section>
      )
    }
    </>
  );

};

export default News;
