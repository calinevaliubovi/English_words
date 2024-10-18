import React from "react";

function Footer (props){
    return (
        <footer className="footer">
            <div className="logo-container">
                    <img src={props.logo} alt="logo" />
                </div>
            <div className="contacts">Contacts</div>
        </footer>
    )
}

export default Footer