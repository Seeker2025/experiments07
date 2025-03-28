console.log('a');

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];
  
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerFiel: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};
// console.log(refs.startBtn);
// console.log(refs.winnerFiel);
// console.log(refs.progressField);
// console.log(refs.tableBody);

refs.startBtn.addEventListener('click', () => {
  const promises = horses.map(run);
  refs.winnerFiel.textContent = '';
  refs.progressField.textContent = 'Заезд начался! Ставки не принимаются!';

  Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c Победил: ${horse}, финишировав за: ${time} времени`,
    'color: green; font-size: 14px; font-weight: bold;'
    )
    refs.winnerFiel.textContent = `Победил: ${horse}, финишировав за: ${time} времени`;
});
  Promise.all(promises).then(x => {
    console.log(x);
    refs.progressField.textContent = `Заезд окончен! Принимаются ставки`;
    
  });
  
});

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => { 
        resolve({horse, time})
    }, time)
    
  });
};

run('Mango')
  .then(x => console.log(x))
  .catch(err => console.log(err));


// console.log(promises);////// массив промисов
// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c Победил: ${horse}, финишировав за: ${time} времени`,
//     'color: green; font-size: 14px; font-weight: bold;'
//   )
// });
// Promise.all(promises).then(x => {
//   console.log(x);
    
// })

//////The function returns a random number between the specified values.
function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(getRandomTime(1000, 2500));