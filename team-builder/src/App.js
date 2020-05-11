import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './header/Header';
import Footer from './footer/footer';
import AddMemberForm from './forms/AddMember';
import TeamContainer from './body/teamContainer/TeamContainer';

import Team from './data/team';
import {addTeamMember} from './data/team';

function App() {
  const [team, setTeam] = useState(Team);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  console.log(currentPath);

  const handleSubmit = (memberSubmitted, editState) => {
    console.log(editState);
    // check to seee if we are in editeState
    if(!editState){
      setTeam([...team, memberSubmitted]);
    }else{
      // if edit state update the current object
      team.map((member, index)=>{
        if(member.id == memberSubmitted.id){
          Team[index] = Object.assign({}, memberSubmitted);
          console.log(member);
          setTeam(Team);
          return;
        }
      });
      
    }
  };
  
  return (
    <div className="App">
      <Header currentPath={currentPath} />
        
        <Route exact path='/'>
          
          <TeamContainer className="myBody" team={team} handleSubmit={handleSubmit}/>
        </Route>
        <Route exact path='/add'>
          <AddMemberForm handleSubmit={handleSubmit} newId={team.length} setCurrentPath={setCurrentPath}/>
        </Route>
        <Route exact path='/add/:id'>
          
          <AddMemberForm handleSubmit={handleSubmit} team={team}/>
        </Route>
           
      <Footer />
    </div>
  );

  
}

export default App;
