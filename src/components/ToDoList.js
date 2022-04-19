import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({toDos, headers, handleDelete, searchTerm}) => {
  return (
      <>
        <h2>To Do List</h2>
        <ToDoItem toDos={toDos} headers={headers} handleDelete={handleDelete} searchTerm={searchTerm}/>
      </>
  )
}

export default ToDoList