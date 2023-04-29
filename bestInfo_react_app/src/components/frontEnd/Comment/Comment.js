// import { click } from '@testing-library/user-event/dist/click';
import { data } from 'jquery';
import React, { useRef, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiLike, BiDislike } from 'react-icons/bi'
import { useAddReactionMutation, useAddReactionLikeMutation } from '../../../store/frontEndApiSlice'

const Comment = ({ text, ip, id, like, dislike }) => {
  const [addReaction] = useAddReactionMutation()
  const [addReactionLike] = useAddReactionLikeMutation()
  // const [replyInput, setReplyInput] = useState(false);
  const counterRef = useRef(dislike == null ? 0 : dislike);
  const likeRef = useRef(like == null ? 0 : like);
  const [disabled, setDisabled] = useState({
    dislike: false,
    like: false
  });
  const dislikeCount = () => {
    counterRef.current++;
    setDisabled({ ...disabled, dislike: true })
  }
  const likeCount = () => {
    likeRef.current++;
    setDisabled({ ...disabled, like: true })
  }

  const incrementDislike = async () => {
    dislikeCount()
    try {
      await addReaction({ comment_id: id }).unwrap()
    } catch (err) {
      console.log("Failed to save the reaction:", err)
    }
  }

  const incrementLike = async () => {
    likeCount()
    try {
      await addReactionLike({ comment_id: id }).unwrap()
    } catch (err) {
      console.log("Failed to save the reaction:", err)
    }
  }

  return (
    <div className='comments'>
      <div className='username__detail'>
        <span>Зочин</span>
        <span> <AiOutlineClockCircle />
        {/* 1 минутын өмнө  */}
        </span>
        <span>{ip.substring(7)}</span>
      </div>

      <div className='user__comment'>
        <p>{text}</p>
      </div>
      <div className='user__interaction'>
        <button
          className='like__btn'
          onClick={incrementLike}
          disabled={disabled.like}
        ><BiLike />
        {likeRef.current}
        </button>
        <button
          disabled={disabled.dislike}
          onClick={incrementDislike}
          className='like__btn'>
          <BiDislike />
          {counterRef.current}
        </button>

        {/* <span onClick={() => setReplyInput((prev) => !prev)}>
          Хариулах
        </span>
        {replyInput ? (
          <div
            style={{
              position: 'absolute',
              top: '18px',
              width: '100%',
            }}
          >
            <input
              type='text'
              className='reply__input'
              placeholder='Сэтгэгдэл'
            />
            <button className='submit__reply'>Илгээх</button>
          </div>
        ) : null} */}
      </div>
    </div>
  )
}
export default Comment;