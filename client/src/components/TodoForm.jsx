import React from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { addNewTodo } from '../redux/actions'

 const TodoForm = () => {

    const [text ,setText]=useState("")

    const dispatch= useDispatch();



    const onFormSubmit=(e)=>{
        e.preventDefault();

        dispatch(addNewTodo(text));

    }
const onInputchange =(e)=>{
   
    setText(e.target.value)
}
  return (
   <form className="form" onSubmit={onFormSubmit}>
    <input
    placeholder="Enter New Todo....."
    className="input"
    onChange={onInputchange}
    />
   </form>
   
  )
}

export default TodoForm;