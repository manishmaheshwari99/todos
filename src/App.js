import axios from 'axios'
import React, { Component } from 'react'
import AddToDoItem from './components/AddToDoItem';
import ToDoList from './components/ToDoList'

export class App extends Component {

  BASE_URL = 'https://625d4a104c36c75357729080.mockapi.io/api/';

  headers = [
    {
      heading: 'Title', value: 'title',
    },
    {
      heading: 'Start Date', value: 'fromDate',
    },
    {
      heading: 'End Date', value: 'endDate',
    },
  ]

  constructor(props) {
    super(props)
  
    this.state = {
       toDos: []
    }
  }

  componentDidMount() {
    this.fetchToDos();
  }

  async fetchToDos() {
    let res = await axios.get(`${this.BASE_URL}todos`);
    this.setState({
      toDos: res.data
    })
  }

  handleDelete = (id) => {
    this.deleteToDo(id);
  }

  deleteToDo = async(toDoId) => {
    let res = await axios.delete(`${this.BASE_URL}todos/${toDoId}`)
    if (res) {
      alert('Item Deleted Successfully !!!')
      this.fetchToDos();
    }
  }

 
  render() {
    return (
      <>
        <AddToDoItem onSubmit={this.fetchToDos} />
        {this.state.toDos.length > 0 ? <ToDoList toDos={this.state.toDos} headers={this.headers} handleDelete={this.handleDelete}/> : <h2>No Any To Do </h2>} 
      </>
    )
  }
}

export default App