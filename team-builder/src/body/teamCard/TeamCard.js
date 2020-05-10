import React from 'react';
//import { useHistory } from "react-router-dom";
//import { Link } from 'react-router-dom'
import './teamCard.css';

import { Route, Link } from 'react-router-dom';
import AddMemberForm from '../../forms/AddMember';


const Body = props => {
  //const history = useHistory();
  return (
    
      <div className="teamCard" >
             <img src={props.member.image} />   
             <Link to={`/add/${props.member.id}`}><p>{props.member.name}</p></Link>
             <p>{props.member.location}</p>
             <label htmlFor="role">{props.member.role}</label>
             <p>{props.member.quote}</p>  
                
       </div>
    
  );
}

export default Body;
