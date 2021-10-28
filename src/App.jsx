import React from "react";
import Header from "./components/Header";
import SearchUser from "./components/SearchUser";
import GameScreen from "./components/GameScreen";
import gameOfSquids from "./fonts/GameOfSquids-1GMVL.woff";
import "./App.css";

function App() {
  const [username, setUserName] = React.useState("");
  const [startGame, setStartGame] = React.useState(false);
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
        startGame={startGame}
        setStartGame={setStartGame}
      />
    </main>
  );
}

export default App;
