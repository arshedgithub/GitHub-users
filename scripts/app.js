const form = document.querySelector("form");
const search = document.querySelector(".search");
const content = document.querySelector(".content");
const account = document.querySelector(".accountInfo");
const userInfo = document.querySelector(".userInfo");


const forecast = new Forecast();

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.search.value.trim();
  form.reset();

  content.classList.add('hidden');
  account.classList.remove('hidden');

  forecast.getUserInfo(username)
    .then((data, reposData) => updateUI(data, reposData))
    .catch((err) => console.log(err));
});


updateUI = (data, reposData) => {
  const { name, login, html_url: url, avatar_url: image } = data.data;

  userInfo.innerHTML = `
          <img class="rounded-circle" src="${image}" alt="profile_picture" />
          <h3>${name}</h3>
          <h6><a href="${url}" target="_blank">${login}</a></h6>
  `;
  console.log(data.reposData);
};

const goToHome = () => {
  account.classList.add('hidden');
  content.classList.remove('hidden');
}



