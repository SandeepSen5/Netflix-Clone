import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Bannner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,actions} from './urls';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions} title='Actions' isSmall/>
    </div>
  );
}

export default App;
