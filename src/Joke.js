import React from "react";

function Joke(props) {
    return(
        <div>
            <h3 style={{display: !props.Question &&  "none"}}>Question: {props.Question}</h3>
            <h3 style={{color: !props.Question && "#888888"}}>Answer: {props.punchLine} </h3>
            <hr />
        </div>
    )
}


export default Joke;