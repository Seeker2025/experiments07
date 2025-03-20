////// setInterval

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
    console.log('Подпишись на рассылку! - ' + Date.now());
    promptCounter += 1;
    if (promptCounter === MAX_PROMPT_ATTEMPTS ) {
        console.log('Нужно остановить интервал');
        clearInterval(intervalId);
        return;
    }
}, PROMPT_DELAY);