import React from "react";
import { v4 as uuidv4 } from "uuid";
import './style.css';

const Form = ({ titleInput, setTitleInput, contextInput, setContextInput, todos, setTodos }) => {
  const onTitleChange = (event) => {
    setTitleInput(event.target.value)
  }

  const onContextChange = (event) => {
    setContextInput(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    setTodos([...todos, { id: uuidv4(), title: titleInput, context: contextInput, completed: false }])
    setTitleInput("")
    setContextInput("")
  }
  return (
    <div className="todo-app">
      <form className="d-flex justify-content-between" onSubmit={onFormSubmit}>
        <div className="form d-flex">
          <label htmlFor="title" className="form-label align-self-center pt-2">Title</label>
          <input type="text" className="form-control ms-3" placeholder="Enter something to do" id="title" value={titleInput} onChange={onTitleChange} required></input>
          <label htmlFor="context" className="form-label align-self-center pt-2 ms-3">Context</label>
          <input type="text" className="form-control ms-3" placeholder="Enter the detail" id="context" value={contextInput} onChange={onContextChange} required></input>
        </div>
        <div className="">
          <button className='btn btn-primary todo-button px-5 ms-3'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
