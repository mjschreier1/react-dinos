import React, { Component } from "react";

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newJob: {
                title: "",
                compensation: "",
                description: "",
                interested: []
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let newJob = this.state.newJob;
        newJob[event.target.name] = event.target.value;
        this.setState({ newJob: newJob });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addJob(this.state.newJob);
    }

    render() {
        return (
            <aside id="side-bar">
                <h3>Add a Job</h3>
                <form onSubmit={ this.handleSubmit }>
                    <label>Title</label>
                    <input type="text" name="title" value={ this.state.newJob.title } onChange={ this.handleChange } />
                    <label>Compensation</label>
                    <input type="text" name="compensation" value={ this.state.newJob.compensation } onChange={ this.handleChange } />
                    <label>Description</label>
                    <textarea name="description" value={ this.state.newJob.description } onChange={ this.handleChange } rows="8" cols="40" />
                    <input type="submit" value="Submit" />
                </form>
            </aside>
        )
    }
}

export default AddForm;