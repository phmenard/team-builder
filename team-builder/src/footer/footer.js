import React from 'react';
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import './footer.css';


const Footer = props => {
    //const history = useHistory();
    return (

        <div className="footerContainer" >
            <div className="footer">
                
                <a href="https://lambdaschool.com/"><h3>Lambda School</h3></a> 
                {/*<div className="home-button" onClick={() => history.push("/")}>Home</div>*/}
                <Link to="/">
                    <div className="header-button">Home</div>
                </Link>
            </div>
        </div>

    );
}

export default Footer;
