import React from "react";
import "./App.css";
import Li from "./components/list-item";
import Nav from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Nav position="top">
        <Li text="campign" />
        <Li text="co-op" />
        <Li text="multiplayer" />
        <Li text="arcade" />
        <Li text="collections" isCurrent={true} />
        <Li text="replays" />
      </Nav>
      <Nav position="bottom" />
    </div>
  );
}

export default App;
