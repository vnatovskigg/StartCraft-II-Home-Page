import React from "react";
import "./App.css";
import BottomNav from "./components/bottom-nav";
import TopNav from "./components/top-nav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <BottomNav />
    </div>
  );
}

export default App;
