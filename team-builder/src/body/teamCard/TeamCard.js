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
             <Link to={`/add/${props.member.id}`}><p className="name">{props.member.name}</p></Link>
             <label className="lable">Location:</label><p className="location">{props.member.location}</p>
             <label className="lable">Role:</label><p className="role">{props.member.role}</p>
             <label className="lable">Quote:</label><p className="quote">"{props.member.quote}"</p>  
                
       </div>
    
  );
}

export default Body;
