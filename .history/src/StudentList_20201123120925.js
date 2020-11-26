import React from 'react';
import axios from 'axios';

export default class StudentList extends React.Component {

state = {
    students:  []
}    
    componentDidMount() {
        axios.get(`https://api.hatchways.io/assessment/students/`)
          .then(res =>  {
            const students = res.data;
            this.setState({ state: students });
          })
      }



      render() {
        return (
            <div>
                {props.students.map(student => <li>{student.city}{student.company}{student.email}</li>)}
            </div>
        )
    }

}

