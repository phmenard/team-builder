import React , {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import './header.css';



const Header = props => {
  
  console.log(window.location.pathname);
  return (
    
      <div className="header" >
        <h3>My Lambda Team</h3>
        
        <Link to="/add">
          <div className="header-button">Add Member</div>
          
        </Link>
        <Link to="/" >
          <div className="header-button">Home</div>
          
        </Link>


      </div>
    
  );

  
}




export default Header;
