import React from 'react'

import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"

const ToDo = ({ text, updateMode, deleteToDo, idCheckBox }) => {
  console.log("A1", idCheckBox)
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
      <input type="checkbox" />
        <BiEdit className='icon' onClick={updateMode} />
        <AiFillDelete className='icon' onClick={deleteToDo} />
      </div>
    </div>
  )
}

export default ToDo