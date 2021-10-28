/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
const USER_URL = "https://api.github.com/users/";

function Fetch({ name, setProfileData, profileData, startGame }) {
  React.useEffect(() => {
    fetch(USER_URL + name)
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
      });
  }, [startGame, name]);

  return (
    <div>
      <h1>Hello {profileData.name}</h1>
      <img height="125" width="125" src={profileData.avatar_url} alt={name} />
    </div>
  );
}

export default Fetch;
