// console.log('q');
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
    notification: document.querySelector('.js-alert'),
    press: document.querySelector('.press'),
};

// hideNotification();
showNotification();
 console.log(timeoutId);

refs.notification.addEventListener('click', onNotificationClick);

console.log(refs.notification);

function onNotificationClick() {
  console.log('click');
  hideNotification();
    clearTimeout(timeoutId);
    // refs.press.classList.remove('press-js');
}

function showNotification() {
    refs.notification.classList.add('is-visible');

    timeoutId = setTimeout(() => {
        console.log(`We close the alert automatically so that it doesn't hang`);
        hideNotification();
        
        
    }, NOTIFICATION_DELAY);
   
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}

document.addEventListener('keydown', (evt) => {
    if (evt.code === 'KeyH') {
        console.log('KeyH');
        showNotification();
    }       
  
});

function pressAdd() {
    refs.press.classList.add('press-js');
}
// pressAdd()