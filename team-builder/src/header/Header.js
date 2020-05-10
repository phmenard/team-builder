import React from 'react';
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import './header.css';


const Header = props => {
  //const history = useHistory();
  return (
    
      <div className="header" >
        <h3>My Lambda Team</h3>
        {/*<div className="home-button" onClick={() => history.push("/")}>Home</div>*/}
        <Link to="/add">
          <div className="header-button">Add Memmber</div>
        </Link>
        <Link to="/">
          <div className="header-button">Home</div>
        </Link>


      </div>
    
  );
}

export default Header;
