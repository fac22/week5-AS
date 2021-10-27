import React from "react";
const USER_URL = "https://api.github.com/users/";

const SearchUser = () => {
  const [username, setUserName] = React.useState("");

  React.useEffect(() => {
    console.log(username);
    fetch(USER_URL + username)
      .then((res) => res.json())
      .then((data) => setProfileData(data));
  }, [username]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setStartGame(true);
        setUserName(event.target.username.value);
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
