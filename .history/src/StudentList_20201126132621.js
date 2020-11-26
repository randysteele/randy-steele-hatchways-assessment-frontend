import React from 'react';
import axios from 'axios';

export default class StudentList extends React.Component {

state = {
    students:  []
}    


    // Average() {
    //   const grades = this.state.students.grades
    //   const sum = grades.reduce(a, b) 
    //   const average = `${(sum / (grades.length))}%`
    // }}


    componentDidMount() {
        axios.get(`https://api.hatchways.io/assessment/students/`)
          .then(res =>  {
            const students = res.data.students;
            this.setState({students});
          })
      }       
      

    //   sum = this.state.students.grades.reduce((previous, current) => current += previous);
    //   avg = sum / this.state.students.grades.length

    //   average(grades){
    //       return grades.reduce((a, b) => ( a + b) ) / this.state.students.grades.length
    //   }

    // calcAverage = (grades) => {
    //     var sum = 0;
    //     grades.forEach ((grade) => {
    //     sum += parseInt(grade); });
    //     return sum / grades.length;      
    // }    



      render() {
        return (
            <div className="studentInfo">
                {this.state.students.map(student => <li> {student.pic} {student.firstName} {student.lastName} <br></br> Email: {student.email} <br></br>Company: {student.company} <br></br>Skill: {student.skill} <br></br> </li>)}
                {/* Average: {this.props.students.average} */}
                {/* {this.state.students.grades.reduce((previous, current) => current += previous / this.state.students.grades.length)} */}
            </div>
        )

        // Average: {student.grades.reduce((previous, current) => current += previous) / student.grades.length}</li>)}
    }

}

