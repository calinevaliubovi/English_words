import React from "react";

function Word (props) {
    return(
        <div className="word__container"> 
            <div className="word">{props.english}</div>
            <div className="word">{props.transcription}</div>
            <div className="word">{props.russian}</div>
        </div>
    )
}

export default Word
