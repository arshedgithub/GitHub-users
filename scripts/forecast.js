const username = "arshedgithub";

const getUser = async () => {
  const base = "https://api.github.com/users/";
  const query = `${username}/repos`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;
};

getUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
