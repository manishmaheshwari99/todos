import React from 'react'
import Table from './Table'

const ToDoItem = ({toDos, headers,handleDelete}) => {
  return (
    <Table headers={headers} data={toDos} handleDelete={handleDelete} />
  )
}

export default ToDoItem