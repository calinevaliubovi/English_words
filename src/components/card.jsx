import React from "react";
import Word from "./word";

function Card (props){
    return (
        <React.Fragment>
            <div className="card">
            <h2 className="card__name">{props.topic}</h2>
            <div className="img_container">
                <img src={props.url} alt={props.description} />
            </div>
            <div className="card_content">
                    <Word english="cat"
                    transcription="kæt"
                    russian="кот"
                    />
                    <Word english="dog"
                    transcription="dog"
                    russian="собака"
                    />
                    <Word english="mause"
                    transcription="mause"
                    russian="мышь"
                    />
            </div>
        </div>
        </React.Fragment>
    );
}
export default Card