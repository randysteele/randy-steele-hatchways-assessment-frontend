import React from 'react';

class Student extends Component {
    constructor() {
        super();
        this.tagInput - React.createRef();
        this.state = ({
            gradesVisible: false,
            tags: []
        })
    }

    seeGrades = () => {
        this.setState({
            gradesVisible: true
        })
    }

    hideGrades = () => {
        this.setState({
            gradesVisible: false 
        })
    }
    handleTagChange = (e) => {
        this.setState({
            newTag: e.target.value
        })
    }
    addTag = (e, id) => {
        e.preventDeault();
        const tags = Array.from(this.state.tags)
        tags.push(this.state.newTag);
        this.setState({
            tags
        }, () => {
            this.props.addTag(id, this.state.tags)
        });
        this.tagInput.current.value = "";
    }
    render() {
        return(
            <div className="student">
                <div className="buttonHolder">
                    {this.state.gradesVisible
                    ? <button OnClick={this.hideGrades}>
                <i className="fas fa-minus"></i>
                      </button>
                      : <button onClick={this.seeGrades}>
                          <i className="fas fa-plus"></i>
                      </button>
    }
                </div>
                <img className="robotAvatar" src="https://robohash.org/63.143.42.242.png" alt="Robot Avatar"/>
                <div className="studentInfo">
                    <p className="studentName">{this.props.student.name}</p>

                    <div className="infoIndented">
                        <p>Company: {this.props.student.company}</p>
                        <p>Email: {this.props.student.email}</p>
                        <p>Skill: {this.props.student.email}</p>
                        <p>Average: {this.props.student.average}</p>
                        {this.state.gradesVisible
                        ?

                        <div>
                            <div className="gradeList">
                            {this.props.student.gradeArray.map((grade) => {
                                return (
                                    <p key={grade}>Test {this.props.student.gradeArray.indexOf(grade) + 1}: <span className="grade">{grade}</span>%</p>
                                )
                            })}
                    </div>
                    {this.state.tags} ? 
                    <div>
                        {this.state.tags.map((tag) => {
                            return <p key={tag} className="tag">{tag}</p>
                        })}
                </div>
             </div>
            </div>
        )
    }
}