import React from 'react';
import logo from './logo.svg';
import AppContainer from "./components/appContainer";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{fontFamily: "ubuntu"}}>Populous</h1>
        <AppContainer></AppContainer>
      </header>
    </div>
  );

  
  
}

export default App;