import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/footer';
import Team from './data/team';

function App() {
  const [team, setTeam] = useState(Team);

  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        <Body team={team} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
