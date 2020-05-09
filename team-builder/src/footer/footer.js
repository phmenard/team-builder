import React from 'react';
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import './footer.css';


const Footer = props => {
    //const history = useHistory();
    return (

        <div className="footerContainer" >
            <div className="footer"><h3>My Lambda Team</h3>
                {/*<div className="home-button" onClick={() => history.push("/")}>Home</div>*/}
                <Link to="/">
                    <div className="header-button">Home</div>
                </Link>
            </div>
        </div>

    );
}

export default Footer;
