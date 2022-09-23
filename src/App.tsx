import React from 'react';
import logo from './logo.svg';
import './App.css';
import Here from './Here'

function App() {

  // const tMyFunc = (window as { [key: string]: any })["myFunc"]
  // tMyFunc("test event")

  const tPlausible = (window as { [key: string]: any })["plausible"]
  tPlausible("Client-API-Error", { props: { Function: "_fetch", Path: "Test" } })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Here />
    </div>
  );
}

export default App;
