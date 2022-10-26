import React from 'react'
import './style.css';

const Header = () => {
  return (
    <div className='header mb-4'>
      <nav className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid ps-0">
          <div className="d-flex justify-content-between">
            <div className="">Personal Task</div>
          </div>
          React
        </div>
      </nav>
      <h2>My To-do List</h2>
      <p>By Irfan Zafar</p>
    </div>
  )
}

export default Header