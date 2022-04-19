import axios from 'axios';
import React, { Component } from 'react'
import todoStyles from './ToDo.module.css';

class AddToDoItem extends Component {

  BASE_URL = 'https://625d4a104c36c75357729080.mockapi.io/api/';

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       startTime: '',
       endTime: '',
    }
  }

  handleTitle = event => {
    const {value} = event.target;
    this.setState({
        title: value
    })
  }

  handleStartTime = event => {
    const {value} = event.target;
    this.setState({
        startTime: value
    })
  }

  handleEndTime = event => {
    const {value} = event.target;
    this.setState({
        endTime: value
    })
  }

  handleToDoSubmit = event => {
    event.preventDefault();
    this.postToDo();
  }

  postToDo = async() => {
    let data = {
        title: this.state.title,
        endDate: this.state.endTime,
        fromDate: this.state.startTime
    }
    let res = await axios.post(`${this.BASE_URL}todos`, data);
    if (res) {
        this.props.onSubmit();
    }
  }

  render() {
    return (
      <>
        <div className={todoStyles.formContainer}>
            <h1>Create To Do Task</h1>
            <div className={todoStyles.formContent}>
                <form onSubmit={this.handleToDoSubmit}>
                    <div className={todoStyles.formGroup} >
                        <label>Title</label>
                        <input type='text' value={this.state.title} onChange={this.handleTitle} />
                    </div>
                    <div className={todoStyles.formGroup} >
                        <label>From Date</label>
                        <input type='datetime-local' value={this.state.startTime} onChange={this.handleStartTime} />
                    </div>
                    <div className={todoStyles.formGroup} >
                        <label>End Date</label>
                        <input type='datetime-local' value={this.state.endTime} onChange={this.handleEndTime} />
                    </div>
                    <div className={todoStyles.formGroup}>
                        <input type='submit' value="Create Task" />
                    </div>
                </form>
            </div>
        </div>
      </>
    )
  }
}

export default AddToDoItem