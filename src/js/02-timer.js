import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button');

btnStart.toggleAttribute('disabled');
const daysRef = document.querySelector('[data-days]'); 
const hoursRef = document.querySelector('[data-hours]'); 
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0]<new Date()){
    alert("Please choose a date in the future")
  }
  else {btnStart.removeAttribute('disabled')}
}
}
flatpickr(input, options)
// console.log(input.value)

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  function pad(value) {
    return String(value).padStart(2 ,0)
  }

  function countDownTime() {
    let timer = setInterval(() => {
      let timeDifference = new Date(input.value) - new Date();
      if (timeDifference >= 0) {
        const {days, hours, minutes, seconds} = convertMs(timeDifference);
        daysRef.textContent = `${days}`;
        hoursRef.textContent = `${hours}`;
        minutesRef.textContent = `${minutes}`;
        secondsRef.textContent = `${seconds}`;
        if (timeDifference <= 0) {
          clearInterval(timer);
        }    
      }
    }, 1000);
  }

  btnStart.addEventListener('click', countDownTime);

