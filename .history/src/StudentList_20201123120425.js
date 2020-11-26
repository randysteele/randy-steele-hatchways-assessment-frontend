import React from 'react';
import axios from 'axios';

export default class StudentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          students: [],
          isLoaded: false,
        };
      }
    
    // componentDidMount() {
    //     axios.get(`https://api.hatchways.io/assessment/students/`)
    //       .then(res =>  {
    //         const students = res.data;
    //         this.setState({ state: students });
    //       })
    //   }

    componentDidMount() {
        fetch('https://api.hatchways.io/assessment/students/')
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              students: result
            });
          });
      }


      render() {
        return (
            <div>
                {this.props.students.map(student => <li>{student.city}{student.company}{student.email}</li>)}
            </div>
        )
    }

}

