import React from 'react';
//import { useHistory } from "react-router-dom";
//import { Link } from 'react-router-dom'
import './teamCard.css';


const Body = props => {
  //const history = useHistory();
  return (
    
      <div className="teamCard" >
             <h2>{props.member.name}</h2>
             <p>{props.member.location}</p>   
       </div>
    
  );
}

export default Body;
