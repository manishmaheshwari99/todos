import React from 'react'
import Table from './Table'

const ToDoItem = ({toDos, headers,handleDelete, searchTerm}) => {
  return (
    <Table headers={headers} data={toDos} handleDelete={handleDelete} searchTerm={searchTerm}/>
  )
}

export default ToDoItem