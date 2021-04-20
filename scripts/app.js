const form = document.querySelector("form");
const search = document.querySelector(".search");

const forecast = new Forecast();

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.search.value.trim();
  form.reset();

  forecast.getUserInfo(username)
    .then((data, reposData) => updateUI(data, reposData))
    .catch((err) => console.log(err));
});


updateUI = (data, reposData) => {
  const { name, url, avatar_url: image } = data.data;
  console.log(name, url, image);
  console.log(data.reposData);
};



