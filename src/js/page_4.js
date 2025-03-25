///// Timer

// const date = new Date();
// console.log('jast date', date);
/*
Юникс время - количество миллисекунд, прошедших с 1 января 1970 года
*/
// console.log('getDate()', date.getTime());
// console.log('Date.now()', Date.now());

// const date1 = Date.now();
// console.log('jast date', date1);

// setTimeout(() => {
//     const date2 = Date.now();
//     console.log('date1', date1);
//     console.log('date2', date2);
//     console.log(date2 - date1);
// }, 3000);

const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
    
};
// console.log(refs.startBtn);
// console.log(refs.stopBtn);
// console.log(refs.clockface);

class Timer{
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
        this.init();
    }
    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if(this.isActive) {
        return
        };
            this.isActive = true;
            const startTime = Date.now();

            this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            //    console.log('start -> startTime', startTime);
            //    console.log('scurrent -> currentTime', currentTime); 
            //    console.log(currentTime - startTime);

            const deltaTime = currentTime - startTime;
            const { hours, mins, secs } = this.getTimeComponents(deltaTime);
            console.log(`${hours}::${mins}::${secs}`);
            // updateClockface({ hours, mins, secs });
            this.onTick({ hours, mins, secs });
        }, 1000);
    }

     stop() {
        clearInterval(this.intervalId);
        console.log(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }
/*
Функция принимает время в миллисекундах и возвращает обьект с днями, часами, минутами и
секундами
*/
    getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time%(1000*60))/1000));
    return { hours, mins, secs };
    }
/*
Функция принимает число и возвращает строку с добавлением 0 перед числом
если число меньше 10
*/    
    pad(value) {
    return String(value).padStart(2, '0');
    }
}

const timer = new Timer({
    onTick: updateClockface,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

////// Interface
  function updateClockface({hours, mins, secs}) {
    refs.clockface.textContent = `${hours}::${mins}::${secs}`;
}  
