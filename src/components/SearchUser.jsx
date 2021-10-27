import React from "react";
const USER_URL = "https://api.github.com/users/";

const SearchUser = (props) => {
  React.useEffect(() => {
    console.log(props.username);
    fetch(USER_URL + props.username)
      .then((res) => res.json())
      .then((data) => props.setProfileData(data));
  }, [props.username]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.setStartGame(true);
        props.setUserName(event.target.username.value);
      }}
    >
      <label>
        Enter your GitHub username
        <input
          type="search"
          aria-label="search github username"
          placeholder="Github username"
          name="username"
          id="username"
        ></input>
      </label>
      <button type="submit">START</button>
    </form>
  );
};
export default SearchUser;
