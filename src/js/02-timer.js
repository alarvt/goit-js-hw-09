import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const input = document.querySelector("#datetime - picker");
const Btn = document.querySelector('button[data-start="start"');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

/* function onInputDate(selectedDates) {
  if (selectedDates <= Date.now()) {   
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    refs.buttonStartEl.removeAttribute('disabled', 'disabled');
    onStartedTimer(selectedDates);
  }
} */

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);
 
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

/* {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
} */

//-------------------------


const date = new Date();
console.log(date)