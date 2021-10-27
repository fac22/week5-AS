/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BodyShape from "./BodyShape";
import WrongLetters from "./WrongLetters";
import Word from "./Word";

function Profile({ profileData }) {
  //   if (!profileData) return <div>Loading...</div>;
  return (
    <div>
      <h1>Hello {profileData.name}</h1>
      <img src="profileData.avatar_url" alt="" />
      <div className="game-container">
        <BodyShape />
        <WrongLetters />
        <Word />
      </div>
    </div>
  );
}

export default Profile;

// if (data.name) {
//     document.circle.style.display = inline
// }
