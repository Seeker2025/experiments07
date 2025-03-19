const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
    notification: document.querySelector('.js-alert'),
    press: document.querySelector('.box_press'),
    text: document.querySelector('.box_will'),
};

// refs.text.classList.add('hide');
// refs.press.classList.add('hide');
//  refs.text.classList.add('hide');
// hideNotification();
showNotification();
 console.log(timeoutId);

refs.notification.addEventListener('click', onNotificationClick);

console.log(refs.notification);
// refs.press.classList.add('hide');

function onNotificationClick() {
  console.log('click');
    hideNotification();
    refs.press.classList.remove('hide');
    refs.text.classList.add('hide');
    clearTimeout(timeoutId);
    // refs.press.classList.remove('press-js');
}

function showNotification() {
    refs.notification.classList.add('is-visible');
    refs.press.classList.add('hide');
    refs.text.classList.remove('hide');
   
    timeoutId = setTimeout(() => {
        console.log(`We close the alert automatically so that it doesn't hang`);
        hideNotification();
        refs.press.classList.remove('hide');
        refs.text.classList.add('hide');
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

