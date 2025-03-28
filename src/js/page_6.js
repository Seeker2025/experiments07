console.log('a');

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
  ];



//////The function returns a random number between the specified values.
function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomTime(1000, 2500));