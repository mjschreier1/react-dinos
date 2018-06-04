import React, { Component, Fragment } from "react";
import Header from "./components/header";
import List from "./components/list";
import AddForm from "./components/add-form";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
    state = {
        jobs: [],
        jobData: false
    }

    componentDidMount() {
        fetch("listings.json")
            .then(res => res.json())
            .then(json => {
                this.setState({ jobs: json.reverse(), jobData: true })
            })
            .catch(err => console.error(err))

        this.handleNewJob = this.handleNewJob.bind(this);
    }

    handleNewJob(newJob) {
        let jobs = this.state.jobs;
        jobs.push(newJob);
        this.setState({ jobs: jobs });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <List data={ this.state.jobs } />
                    <AddForm addJob={ this.handleNewJob } />
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
