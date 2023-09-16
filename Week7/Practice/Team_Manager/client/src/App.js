import {Routes , Route, Navigate } from 'react-router-dom'
import './App.css';
import ListPlayers from './components/ListPlayers';
import CreatePlayer from './components/CreatePlayer';
import React, { useState }  from 'react';
import PlayerStatus from './components/PlayerStatus';
import TopNav from './components/TopNav';

function App() {

  
  return (
    <div>
  

      <Routes>
        <Route path="/players/addplayer" element={<CreatePlayer/>}/>
        <Route  path="/players/list" element={<ListPlayers/>} />
        <Route path='status/game/:id' element={<PlayerStatus/>} />
        <Route path="/" element={<Navigate to="players/list" /> }/>

      </Routes>
    </div>
  );
}

export default App;
