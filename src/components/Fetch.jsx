/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
const USER_URL = "https://api.github.com/users/";

function Fetch({ name, setProfileData, profileData, startGame, randomNumber }) {
  React.useEffect(() => {
    fetch(USER_URL + name)
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
      });
  }, [startGame, name]);

  if (profileData.message === "Not Found")
    return <div>Wrong username! Try again!</div>;

  return (
    <div className="player-container">
      <h2>Hello Player: {randomNumber} </h2>
      <img height="125" width="125" src={profileData.avatar_url} alt={name} />
    </div>
  );
}

export default Fetch;
