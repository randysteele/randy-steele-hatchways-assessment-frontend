import React from 'react';
import axios from 'axios';

export default class StudentList extends React.Component {

state = {
    students:  []
}    
    componentDidMount() {
        axios.get(`https://api.hatchways.io/assessment/students/`)
          .then(res =>  {
            const students = res.data.students;
            this.setState({students});
          })
      }

      average(grades){
          return grades.reduce((a, b) => ( a + b) ) / this.state.students.grades.length

      }

      render() {
        return (
            <div>
                {this.state.students.map(student => <li> {student.firstName} {student.lastName} <br></br> Email: {student.email} <br></br>Company: {student.company} <br></br>Skill: {student.skill} <br></br> Average: {student.grades.reduce((a, b) => ( a + b) ) / this.state.students.grades.length}</li>)}
            </div>
        )
    }

}

