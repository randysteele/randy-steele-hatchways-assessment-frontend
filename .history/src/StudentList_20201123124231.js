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
            const sum = grades.reduce(add)
            const average = `${(sum / (grades.length))}%`
            this.setState({students, average});
          })
      }


      render() {
        return (
            <div>
                {this.state.students.map(student => <li> {student.firstName} {student.lastName} <br></br> Email: {student.email} <br></br>Company: {student.company} <br></br>Skill: {student.skill} <br></br> Average: {student.average}</li>)}
            </div>
        )
    }

}

