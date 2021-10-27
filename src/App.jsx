import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import SearchUser from "./components/SearchUser";
import GameScreen from "./components/GameScreen";

import "./App.css";

function App() {
  const [username, setUserName] = React.useState(null);
  const [startGame, setStartGame] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [profileData, setProfileData] = React.useState("");

  return (
    <main>
      <Header />
      <SearchUser
        username={username}
        setUserName={setUserName}
        setProfileData={setProfileData}
        setStartGame={setStartGame}
      />
      <GameScreen
        name={username}
        profileData={profileData}
        setProfileData={setProfileData}
        gameStart={startGame}
      />
    </main>
  );
}

export default App;
