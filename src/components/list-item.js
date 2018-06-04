import React from "react";

const ListItem = props => (
    <li>
        <h4>{ props.job.title }</h4>
        <small>{ props.job.pay }</small>
        <p>{ props.job.description }</p>
        <small>{props.job.interested.length === 1 
            ? "1 dino is " 
            : `${props.job.interested.length} dinos are `}
            interested in this job
        </small>
    </li>
)

export default ListItem;