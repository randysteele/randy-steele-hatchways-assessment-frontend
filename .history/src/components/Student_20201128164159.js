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
        })
    }
}