import React, { useState } from 'react'
import './style.css';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';

const Layout = () => {
  const [titleInput, setTitleInput] = useState('')
  const [contextInput, setContextInput] = useState('')
  const [todos, setTodos] = useState([{ id: 1, title: "titleInput", context: "contextInput", completed: false }])
  return (
    <div>
      <div className="container">
        <Header />
        <Form titleInput={titleInput} setTitleInput={setTitleInput} contextInput={contextInput} setContextInput={setContextInput} todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default Layout