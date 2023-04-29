import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/frontEnd/UI/Spinner/Spinner";
import Box from "../../components/frontEnd/UI/detailcard/DetailCard";
import NewsSide from "../../components/frontEnd/newsSide/NewsSide";
import { useGetNewsDetailByIdQuery,useGetNewsAllQuery,useGetBannerAllQuery, useAddNewCommentMutation } from "../../store/frontEndApiSlice";
import Comment from "../../components/frontEnd/Comment/Comment";
import "./detail.css";


export default function Detail (){
  const[comment, setComment] = useState({
    id : '',
    text: '',
    ip: '',
    newsId: '',
  });
  const { id } = useParams()

  const { data, isSuccess } = useGetNewsDetailByIdQuery(id);
  const {data: getNewsAll, isSuccess: newsAllIsSuccess} = useGetNewsAllQuery()
  const {data: getBannerAll, isSuccess: bannerAllIsSuccess} = useGetBannerAllQuery()

  const commentChange = (e) => {
    setComment({ ...comment, text: e.target.value , newsId: id, ip: ''})
  }
  const [addNewComment] = useAddNewCommentMutation()
  const handleSub = async () => {
    try {
      await addNewComment(comment).unwrap()
      window.location.reload()
    } catch (err) {
      console.error('Failed to save the comment: ', err)
    }
  }
  return (
    <>
      {isSuccess ?
        (<div className="news">
          <div className="news__content">
            <div className="news__banner">
              <figure className="news__content-figure" >
                {bannerAllIsSuccess ? <img className="news__content-img" src={getBannerAll.bannerD1[0].image} /> : <center><h3>D1-750X90</h3> </center>}
              </figure>
            </div>

            <Box
              category={data[0].categoryname}
              date={data[0].date}
              shareUrl={window.location.pathname}
              shareTitle={data[0].title}
              title={data[0].title}
              img={data[0].image}
              text={data[0].text}
            />

            <div className="news__banner">
              {bannerAllIsSuccess ? <img src={getBannerAll.bannerD2[0].image} /> : <center><h3>D1-750X90</h3> </center>}
            </div>

            <section className='comment__section'>
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
                 onClick={handleSub}> Илгээх </button>
              </div>

              { isSuccess && data[0].comment_text !== null ? data.map ((item , index) => (
                <div key = {index}>
                  <div>
                  <Comment 
                  id = {item.comment_id} 
                  text = {item.comment_text} 
                  ip = {item.comment_ip}
                  dislike = {item.comment_dislike}
                  like = {item.comment_like}/>
                  </div>
                </div>
              )):null}
            </section>
          </div>

          <div className="news__sideNews">
            {newsAllIsSuccess ? <NewsSide data={getNewsAll}/> : null}
          </div>
        </div>) : <Spinner />}
    </>
  );
}