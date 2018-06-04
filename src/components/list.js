import React from "react";
import ListItem from "./list-item";

const List = props => {
    const jobs = props.data.map((job, i) => (
        <ListItem job={ job } key={ `job-${i}` } />
    ))

    return (
        <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">
                { jobs }
            </ul>
        </section>
    )
}

export default List;