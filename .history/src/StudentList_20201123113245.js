import react from 'react';

export default class StudentList extends React.Component {

    state = {
        students: []
    }

    componentDidMount() {
        fetch("https://api.hatchways.io/assessment/students/")
        .then(resp => resp.json())
        const students = resp.data;
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

