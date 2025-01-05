// also got this from trevor although i took out some perameters to make it raunchier
const endpoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=twopart';

const getJokes = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getJokes;
