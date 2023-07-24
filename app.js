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

function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });

  updateDom();
};

//Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDom();
};

//Filter only millionares
function showMil() {
  data = data.filter(user => user.money > 1000000);

  updateDom();
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDom();
}

//Update DOM
function updateDom(providedData = data) {
  //Clear the main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}

//Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

showMil()

//Event listeners
showMilBtn.addEventListener('click', showMil);
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
