import React from "react";

function Header (props){
    return(
        <header className="header">
            <div className="logo">
                <div className="logo-container">
                    <img src={props.logo} alt="logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li>About</li>
                        <li>Words</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header