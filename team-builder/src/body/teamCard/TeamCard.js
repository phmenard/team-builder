import React from 'react';
//import { useHistory } from "react-router-dom";
//import { Link } from 'react-router-dom'
import './teamCard.css';


const Body = props => {
  //const history = useHistory();
  return (
    
      <div className="teamCard" >
             <img src={props.member.image} />   
             <label htmlFor="name">{props.member.name}</label>
             <p>{props.member.location}</p>
             <label htmlFor="role">{props.member.role}</label>
             <p>{props.member.quote}</p>    
       </div>
    
  );
}

export default Body;
