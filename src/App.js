import React from "react";
//Import Styles
import './styles/app.scss'
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Data
import chillHop from "./data";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
