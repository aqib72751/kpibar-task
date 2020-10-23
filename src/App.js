import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Components/Sidebar.js'
import Header from './Components/Header.js'
import Progress from './Components/Progress.js'

function App() {
  return (
    <div className="app">
      <div className="appSidebar">
        <Sidebar />
      </div>
      <div className="appHome">
        <Header />
        <div className="appContent">
          <Progress />
          <div className="appBottom ">
            <div className="appTeam">
              Team
            </div>
            <div className="appTask">
              Task
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
