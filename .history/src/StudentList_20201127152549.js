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

    handleNameChange = (event) => {
        const searchQuery = event.target.value.toLowerCase();
    
        const match = (students) => {
          return (
            students.firstName.includes(searchQuery) || students.lastName.includes(searchQuery)
          )
        }
    
        const filteredArray = this.state.students.filter(match)
    
        this.setState({
          filteredArray: filteredArray
        })
      }

      render() {
        return (
            <div>
                <form action="" className="searchForm">
                <input type="text" placeholder="Search by name" onChange={this.handleNameChange}/>
                </form>
                {this.state.students ?
                <div> 
                    {this.state.filteredArray.map((student) => {
                        return (
                            <Student key={student.key} student={student}/>
                        )
                    })}
            </div>
             )
                }
            }

        // Average: {student.grades.reduce((previous, current) => current += previous) / student.grades.length}</li>)}