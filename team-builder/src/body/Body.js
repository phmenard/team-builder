import React from 'react';
//import { useHistory } from "react-router-dom";
//import { Link } from 'react-router-dom'
import './body.css';

import TeamCard from './teamCard/TeamCard';


const Body = props => {
    //const history = useHistory();
    return (

        <div className="body" >
            <div className="team-container">
                {props.team.map(member => (
                    <TeamCard key={member.id} member={member} />
                ))}
       
            </div>
        </div>

    );
}

export default Body;
