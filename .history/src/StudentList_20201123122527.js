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


      render() {
        return (
            <div>
                {this.state.students.map(student => <li>{student.firstName} {student.lastName} {student.city} {student.company} {student.email} </li>)}
            </div>
        )
    }

}

