const username = "arshedgithub";

const getUser = async (username) => {
  const userURI = `https://api.github.com/users/${username}`;
  const repos = "/repos";

  const response = await fetch(userURI);
  const data = await response.json();

  const reposResponse = await fetch(userURI + repos);
  const reposData = await reposResponse.json();

  return { data, reposData };
};

getUser("arshedgithub")
  .then((data, reposData) => updateUI(data, reposData))
  .catch((err) => console.log(err));
