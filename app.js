const main = document.getElementById('main');
const addUserBtn = document.getElementById('add_user');
const doubleBtn = document.getElementById('double');
const showMilBtn = document.getElementById('show_mil');
const sortBtn = document.getElementById('sort');
const calcBtn = document.getElementById('calc_wealth');

let data = []; //array of objects w all the poeple

getRandomUser();
getRandomUser();
getRandomUser();

//Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('http://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  if (/[aeiou]/i.test(user.name.first)) {
    const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 1000000)
    }
    addData(newUser);
  } else {
    // If the user name does not contain 'a' or 'i' or 'o' or 'e' or 'u', fetch a new user
    getRandomUser();
  }
};