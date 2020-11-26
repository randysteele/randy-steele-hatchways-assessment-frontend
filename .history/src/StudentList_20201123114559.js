import React from 'react';

export default class StudentList extends React.Component {

    state = {
        students: []
    }

    componentDidMount() {
        fetch("https://api.hatchways.io/assessment/students/")
        .then(resp => resp.json())
        .then(students => students)
        this.setState({state: students})
    }
    render() {
        return (
            <div>
                {this.state.students.map(student => <li>{student.city}{student.company}{student.email}</li>)}
            </div>
        )
    }

}

