console.log('Hello World');
console.log('a');
console.log('b');

const ourPromise = new Promise((resolve, reject) => {
    let number = Math.random()>.5;
    if (number) {
        resolve('Success!');
    } else {
        reject(console.log('Failure!'));
    }
}).then(data => console.log('Данні з виконаного проміса: ', data))
    .catch(error => console.log('Помилка з виконаного проміса: ', error))
    .finally(() => console.log('Проміс завершено!'));
