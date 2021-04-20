class Forecast {
  constructor() {
    this.userURI = 'https://api.github.com/users/';
  }
  async getUserInfo(username) {
    const user = `${username}`
    const response = await fetch(this.userURI + user);
    const data = await response.json();

    const reposResponse = await fetch(this.userURI + user + '/repos');
    const reposData = await reposResponse.json();

    return { data, reposData };
  };
}
