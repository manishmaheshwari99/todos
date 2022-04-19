import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({toDos, headers, handleDelete}) => {
  return (
      <>
        <h2>To Do List</h2>
        <ToDoItem toDos={toDos} headers={headers} handleDelete={handleDelete}/>
      </>
  )
}

export default ToDoList