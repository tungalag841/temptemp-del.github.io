import React from "react";
import { MdAccessTime } from "react-icons/md";
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import renderHTML from "react-render-html";
import moment from "moment";

import "./detailCard.css";

const Box = ({category, date, shareUrl, shareTitle,title,img, text}) =>{

  // const [addNewComment] = useAddNewCommentMutation()
  // const handleSub = async () => {
  //   try {
  //     await addNewComment(comment).unwrap()
  //     window.location.reload()
  //   } catch (err) {
  //     console.error('Failed to save the comment: ', err)
  //   }
  // }
  // const commentChange = (e) => {
  //   setComment({ ...comment, text: e.target.value , newsId: id, ip: ''})
  // }
  return (
          <div className="content">
            <h1 className="content__title">{title}</h1>
    
            <hr className="content__hr" />
    
            <div className="content__subtitle">
              <div className="content__subtitle_category">
                {category}
              </div>
    
              <div className="content__subtitle_date">
                <MdAccessTime size="14px" /> {moment(date).format("L")}
              </div>
    
              <div className="content__subtitle_icons">
                <FacebookShareButton
                  className="content__subtitle_icon"
                  url={'https://bestinfo.mn/'+shareUrl}
                >
                  <FacebookIcon size={28} round={true} />
                </FacebookShareButton>
    
                <LinkedinShareButton
                  className="content__subtitle_icon"
                  url={'https://bestinfo.mn/'+shareUrl}
                  title={title}
                  windowWidth={750}
                  windowHeight={600}
                >
                  <LinkedinIcon size={28} round={true} />
                </LinkedinShareButton>
    
                <TwitterShareButton
                  className="content__subtitle_icon"
                  url={'https://bestinfo.mn/'+shareUrl}
                  title={title}
                >
                  <TwitterIcon size={28} round={true} />
                </TwitterShareButton>
    
                {/* <FacebookShareButton 
                  className="content__subtitle_icon"
                  url={'https://bestinfo.mn/'+shareUrl}
                >
                  <GooglePlusIcon size={28} round={true} />
                </FacebookShareButton> */}
              </div>
            </div>
    
            <div className="content__newsPhoto">
              <figure className="content__figure">
                <img
                  className="news__content-img"
                  src={img}
                  alt={title}
                />
              </figure>
            </div>
            <div className="ck-content">
              {renderHTML(text)}
            </div>

            {/* Comment */}


            {/* <section className='comment__section'>
              <div className='comment__input-form'>
                <textarea
                  className='comment__input'
                  name=''
                  id=''
                  cols='100'
                  rows='10'
                  placeholder='Сэтгэгдлээ энд бичнэ үү'
                  onChange={commentChange}
                  // value={comment}
                ></textarea>
                <button
                 className='submit__btn' 
                 type='submit'
                 onClick={handleSub}
                 >
                  Илгээх
                </button>
              </div>

              { isSuccess && data[0].comment_text !== null ? data.map ((item , index) => (
                <div key = {index}>
                  <div>
                  <Comment 
                  // id = {item.comment_id} 
                  // text = {item.comment_text} 
                  // ip = {item.comment_ip}
                  // dislike = {item.comment_dislike}
                  // like = {item.comment_like}
                  />
                  </div>
                </div>
              )):null}
            </section> */}

            {/* comment end */}
          </div>
        );
}
export default Box;
