import React from "react";
import Header from "./components/Header";
import SearchUser from "./components/SearchUser";
import GameScreen from "./components/GameScreen";
import gameOfSquids from "./fonts/GameOfSquids-1GMVL.woff";
import "./App.css";

// preselected words
const words = ["baby", "javascript", "programming", "house", "game", "laptop"];
// selecting a random word
let randomWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //state
  const [username, setUserName] = React.useState("");
  const [startGame, setStartGame] = React.useState(false);
  const [profileData, setProfileData] = React.useState("");
  const [playable, setPlayable] = React.useState(true);
  const [correctLetters, setCorrectLetters] = React.useState([]);
  const [wrongLetters, setWrongLetters] = React.useState([]);
  const [renderNotification, setRenderNotification] = React.useState(false);

  React.useEffect(() => {
    //helper for notification
    const showNotification = (setter) => {
      setter(true);
      setTimeout(() => {
        setter(false);
      }, 2000);
    };

    const keydown = (event) => {
      const { key, keyCode } = event;
      // checking to see if our selectedword includes our letter
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        //if it doesnt include our letter then we're going to add it to our letters
        //if our correct letters does include our letter already that means we've entered twice
        // we want to show notification that we're already ntered that letter
        //same think with wrongletters
        if (randomWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            showNotification(setRenderNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            showNotification(setRenderNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", keydown);
    //every time we render the app we dont want to add another event listener, so we need to do a cleanup
    return () => window.removeEventListener("keydown", keydown);
  }, [correctLetters, wrongLetters, playable]);

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
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        randomWord={randomWord}
        renderNotification={renderNotification}
      />
    </main>
  );
}

export default App;
