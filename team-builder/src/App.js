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
  const [team, setTeam] = useState(Team.reverse());

  const handleSubmit = (member) => {
    setTeam([...team, member]);
  };

  return (
    <div className="App">
      <Header />
        
        <Route exact path='/'>
          <TeamContainer className="myBody" team={team} />
        </Route>
        <Route exact path='/add'>
          <AddMemberForm handleSubmit={handleSubmit}/>
        </Route>
        
      
      <Footer />
    </div>
  );
}

export default App;
