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
console.log(input.value)

// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }

//   function countDownTime (){
// const timeDifference = input.value - Date.now();
// const formatDate = convertMs(timeDifference);
// console.log(formatDate)
//   }

//   setInterval(countDownTime, 1000)
//   btnStart.addEventListener('click', onClickBtnStart)

// function onClickBtnStart() {
//     const currentDate = Date.now();
//     const timeDifference = selectedDates.getTime() - currentDate;
//     console.log(timeDifference)
//     formatDate = convertMs(timeDifference);
// }