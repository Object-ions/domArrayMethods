const main = document.getElementById('main');
const addUserBtn = document.getElementById('add_user');
const doubleBtn = document.getElementById('double');
const showMilBtn = document.getElementById('show_mil');
const sortBtn = document.getElementById('sort');
const calcBtn = document.getElementById('calc_wealth');

let data = []; //array of objects w all the poeple

//Fetch random user and add money
function getRandomUser() {
  fetch('http://randomuser.me/api')
}