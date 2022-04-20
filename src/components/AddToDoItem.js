import axios from 'axios';
import React, { Component } from 'react'
import todoStyles from './ToDo.module.css';
import ApiCalendar from 'react-google-calendar-api';

class AddToDoItem extends Component {

  BASE_URL = 'https://625d4a104c36c75357729080.mockapi.io/api/';

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       startTime: '',
       endTime: '',
       isCreatingToDo: false
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

    this.setState(prevState=>{
      return {
        ...prevState,
        isCreatingToDo: true
      }
    })

    // ApiCalendar.handleAuthClick();
    if (!ApiCalendar.sign) {
      ApiCalendar.handleAuthClick();
    }

    let data = {
      title: this.state.title,
      endDate: this.state.endTime,
      fromDate: this.state.startTime
    }
    let res = await axios.post(`${this.BASE_URL}todos`, data);
    console.log(res)
    if (res) {
        this.setState(prevState=>{
          return {
            ...prevState,
            isCreatingToDo: false
          }
        })
        this.props.onSubmit();
        this.createEvent(data)
    }
  }

  createEvent({title, fromDate, endDate, desc}) {
    let updatedFromDate = new Date(fromDate).toISOString()
    let updatedEndDate = new Date(endDate).toISOString()
    let stDate = updatedFromDate;
    let test = updatedEndDate;
    let description = desc || 'By Default Description'
    const event = {
      summary: title,
      description: description,
      start: {
        dateTime: stDate
      },
      end: {
        dateTime: test
      }
    };

    ApiCalendar.createEvent(event)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    let buttonValue = this.state.isCreatingToDo ? 'Creating' : 'Create ';
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
                        <input type='submit' value={buttonValue}/>
                    </div>
                </form>
            </div>
        </div>
      </>
    )
  }
}

export default AddToDoItem