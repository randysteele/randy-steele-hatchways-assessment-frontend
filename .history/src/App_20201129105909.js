import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Student from './components/Student';


class App extends Component {
  constructor() {
    super();
    this.state = ({

    })
  }

  componentDidMount = () => {
    axios({
      method: "GET",
      url: "https://www.hatchways.io/api/assessment/students",
    }).then((res) => {
      const students = res.data.students;
      this.studentData(students);
    })
  }

}

export default App;