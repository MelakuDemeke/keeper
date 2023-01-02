import React from "react";

function Notes(probs){
    return <div className="note">
        <h1>{probs.title}</h1>
        <p>{probs.content}</p>
    </div>
}

export default Notes;