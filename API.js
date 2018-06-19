export default{
  async login (username, password) {
    const response = await fetch('https://flexinvest.me/drf/auth/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ username, password })
    })
    const data = await response.json();
    data.status = await response.status;
    return data;
  }
}
