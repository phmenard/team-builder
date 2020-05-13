import React from 'react';
//import { useHistory } from "react-router-dom";
//import { Link } from 'react-router-dom'
import './teamCard.css';

import { Link } from 'react-router-dom';
//import AddMemberForm from '../../forms/AddMember';


const Body = props => {
  //const history = useHistory();
  return (
    
      <div className="teamCard" >
             <img src={props.member.image} />   
             <Link to={`/add/${props.member.id}`}>{props.member.badge == '' ?  <p className="name">{props.member.name}</p> : <p className="name">{props.member.name} <img className="badge" src={props.member.badge}/></p>}</Link>
             <label className="lable">Location:</label><p className="location">{props.member.location}</p>
             <label className="lable">Role:</label><p className="role">{props.member.role}</p>
             <label className="lable">Quote:</label>
             <div className="quote-container"><p className="quote">"{props.member.quote}"</p></div> 
             
             {props.member.email !='' ? <p className="email"><label className="email lable">Email:</label>{props.member.email}</p> : ""}  
                
       </div>
    
  );
}

export default Body;
