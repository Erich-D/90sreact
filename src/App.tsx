import React from 'react';
import { MainColumn } from './maincolumn';
import { SideBar } from './sidebar';

const containerStyle: React.CSSProperties = {
  backgroundImage: "url('https://media.tenor.com/baTfy6sflvAAAAAd/equalizer-music.gif')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex'  
}



function App() {
  return (
    <div style={containerStyle}>
      <SideBar side='left'></SideBar>
      <MainColumn></MainColumn>
      <SideBar side='right'></SideBar>
    </div>
  );
}

export default App;
