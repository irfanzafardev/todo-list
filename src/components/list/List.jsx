import React, {useState} from 'react'
import Dialog from './Dialog'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'

const Todolist = ({ todos, setTodos }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    setShow(false);
  }

  return (
    <div>
      <div className="mt-5">
        The incompleted list
        <div className="row">
          {todos.map((todo) => (
            <li className={`col-3 ${todo.completed ? "d-none" : ""} mt-3 me-3 ps-3`} key={todo.id}>
              <h4>{todo.title}</h4>
              <p>{todo.context}</p>
              <div className="action-btn d-flex">
                <div className='button text-primary' onClick={() => handleComplete(todo)}>Done</div>
                <div className='button text-danger ms-3' onClick={handleShow}>Delete</div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(todo)}>
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </li>
          ))}
        </div>
      </div>
      <div className="mt-5">
        The completed list
        <div className="row">
          {todos.map((todo) => (
            <li className={`col-3 ${!todo.completed ? "d-none" : ""} mt-3 me-3`} key={todo.id}>
              <h4>{todo.title}</h4>
              <p>{todo.context}</p>
              <div className="action-btn d-flex">
                <div className='button text-secondary' onClick={() => handleComplete(todo)}>Cancel</div>
                <div className='button text-danger ms-3' onClick={handleShow}>Delete</div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(todo)}>
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </li>
          ))}
        </div>

      </div>
    </div >
  )
}

export default Todolist