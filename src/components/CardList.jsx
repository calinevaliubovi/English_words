import React from "react";
import Card from "./card";



function CardList (props){
    return (
        <React.Fragment>
            <Card
                topic="animals"
                url="https://static9.depositphotos.com/1594920/1089/i/450/depositphotos_10897402-stock-photo-group-of-cats-and-dogs.jpg"
                description="animals photo"
            />
        </React.Fragment>
    );
}

export default CardList