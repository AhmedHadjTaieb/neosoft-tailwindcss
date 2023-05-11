import React from 'react';
import './App.css';
import {ToggleTheme} from "./theme/ToggleTheme";

function App() {
  return (
    <div className="App bg-gradient-to-br from-primary_dark to-secondary_dark dark:from-primary dark:to-secondary h-screen w-screen">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

        <ToggleTheme></ToggleTheme>
    </div>
  );
}

export default App;
