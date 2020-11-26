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
        const { items } = this.state;
        if (!isLoaded) {
          return <div>Loading ... </div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  <h3>{item.email}</h3>
                  <p>{item.city}</p>
                </li>
              ))}
            </ul>
          );
        }
      }
    }