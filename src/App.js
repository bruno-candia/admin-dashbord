import React from 'react';
import './app.css'
import Body from './components/BodySection/Body';
import SideBar from './components/SideBarSection/SideBar';

const App = () => {
  return (
    <div className="container">
      <SideBar/>
      <Body/>
    </div>
  )
}

export default App