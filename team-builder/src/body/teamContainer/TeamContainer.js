import React from 'react';
//import { useHistory } from "react-router-dom";
//import { Link } from 'react-router-dom'
import './teamContainer.css';

import TeamCard from '../teamCard/TeamCard';



const TeamContainer = props => {
    //const history = useHistory();
    console.log(props.team);
    return (

        <div className="myBody" >
            <div className="team-container">
                {props.team.map(member => (
                    <TeamCard key={member.id} member={member} />
                ))}
       
            </div>
        </div>

    );
}

export default TeamContainer;
