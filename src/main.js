console.log('Hello World');

// const ourPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         let number = Math.random() > .5;
//         console.log(number);
//         if (number) {
//             resolve('Success');
//         } else {
//             reject('Failure');
//         }
//     }, 1000);
// }).then((message) => {
//     console.log('Hooray!',message);
// }).catch((message) => {
//     console.log('Mistake',message);
// }).finally(() => {
//     console.log('Promise is done');
// });

const date = new Date();
console.log('jast date', date);
console.log('getDate()', date.getDate());
console.log('getDay()', date.getDay());
console.log('getMonth()', date.getMonth());
console.log('getFullYear()', date.getFullYear());
console.log('getHours()', date.getHours());
console.log('getMinutes()', date.getMinutes());
console.log('getSeconds()', date.getSeconds());
console.log('getSeconds()', date.getMilliseconds());
console.log('/////');
console.log('getUTCDate()', date.getUTCDate());
console.log('getUTCDay()', date.getUTCDay());
console.log('getUTCMonth()', date.getUTCMonth());
console.log('getUTCFullYear()', date.getUTCFullYear());
console.log('getUTCHours()', date.getUTCHours());