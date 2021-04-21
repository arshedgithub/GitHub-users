const form = document.querySelector("form");
const search = document.querySelector(".search");
const content = document.querySelector(".content");
const account = document.querySelector(".accountInfo");
const userInfo = document.querySelector(".userInfo");
const repos = document.querySelector(".repos");
const repoList = document.querySelector(".repoList");

const arrRight = `<i class="fas fa-angle-right"></i>`;
const arrDown = `<i class="fas fa-angle-down"></i>`;

let arrow = arrRight;

const forecast = new Forecast();

form.addEventListener('submit', e => {
  e.preventDefault();

  let username = form.search.value.trim();
  form.reset();

  content.classList.add('hidden');
  account.classList.remove('hidden');

  forecast.getUserInfo(username)
    .then((data, reposData) => updateUI(data, reposData))
    .catch((err) => console.log(err));
});


updateUI = (data, reposData) => {
  const { name, login, html_url, avatar_url } = data.data;

  userInfo.innerHTML = `
    <img class="rounded-circle" style="height:200px;" src="${avatar_url}" alt="profile_picture" />
    <h3 class="my-3">${name != null ? name : ''}</h3>
    <h6><a href="${html_url}" target="_blank">${login}</a></h6>
    `;


  repos.innerHTML = `
  <h5 class="py-4" style="cursor: pointer;">${arrow}&nbsp;&nbsp;Repositories &nbsp;&nbsp;${data.reposData.length}</h5>
  `;

  repos.addEventListener('click', e => {
    const { target } = e;
    if (target.parentElement == repos || target == repos) {

      if (arrow == arrRight) {
        arrow = arrDown;
        repos.innerHTML = `
        <h5 class="py-4" style="cursor: pointer;">${arrow}&nbsp;&nbsp; Repositories &nbsp;&nbsp;${data.reposData.length}</h5>
        `;
        console.log(data);
        data.reposData.map(c => {
          repos.innerHTML += `<li><a href="${c.html_url}" target="_blank">${c.name}</a></li>`;
        });
        return;

      } else {
        arrow = arrRight;
        repos.innerHTML = `
        <h5 class="py-4" style="cursor: pointer;">${arrow}&nbsp;&nbsp; Repositories &nbsp;&nbsp;${data.reposData.length}</h5>
        `;
        return;
      }

    }
  });

};

const goToHome = () => {
  window.location.reload();
}



