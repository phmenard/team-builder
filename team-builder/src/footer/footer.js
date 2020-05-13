import React from 'react';
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import './footer.css';


const Footer = props => {
    //const history = useHistory();
    return (

        <div className="footerContainer" >
            <div className="footer">
                
                <a href="https://lambdaschool.com/"><img className="footer img" src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5dcda59e63bb6ae5c9282801_small-red-logo-p-500.png"></img></a> 
                {/*<div className="home-button" onClick={() => history.push("/")}>Home</div>*/}
                <Link to="/">
                    <div className="footer-button">Home</div>
                </Link>
            </div>
        </div>

    );
}

export default Footer;
