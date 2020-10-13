import React from "react";
import "./App.css";
import TopLi from "./components/list-item";
import BotLi from './components/li-bottom';
import BottomNav from "./components/bottom-nav";
import TopNav from "./components/top-nav";

function App() {
  return (
    <div className="App">
      <TopNav>
        <TopLi text="campign" />
        <TopLi text="co-op" />
        <TopLi text="multiplayer" />
        <TopLi text="arcade" />
        <TopLi text="collections" />
        <TopLi text="replays" />
        <TopLi text="plus" />
      </TopNav>
      <BottomNav>
        <BotLi text="skins"  />
        <BotLi text="announcers"  />
        <BotLi text="emoticons"  />
        <BotLi text="portraits"  />
        <BotLi text="decals"  />
        <BotLi text="animations"  />
      </BottomNav>
    </div>
  );
}

export default App;
