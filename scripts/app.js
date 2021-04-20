const getAccount = () => {};

updateUI = (data, reposData) => {
  const { name, url, avatar_url: image } = data.data;
  console.log(name, url, image);
  console.log(data.reposData);
};
