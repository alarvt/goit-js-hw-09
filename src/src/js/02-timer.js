/* import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

<input type="text" id="datetime-picker" />;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

{
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
} */

//-------------------------
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onInputDate(selectedDates[0]);
  },
};
const fp = flatpickr('#datetime-picker', options);
refs.buttonStartEl.setAttribute('disabled', 'disabled');
let timeId = null;
const INTERVAL = 1000;
/** functions */
function onInputDate(selectedDates) {
  if (selectedDates <= Date.now()) {
    // alert('Please choose a date in the future');
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    refs.buttonStartEl.removeAttribute('disabled', 'disabled');
    onStartedTimer(selectedDates);
  }
}
function onStartedTimer(selectedDates) {
  let timerValueInMs = Date.parse(selectedDates) - Date.now();
  let objTimerValue = convertMs(timerValueInMs);
  refs.buttonStartEl.addEventListener('click', () => {
    refs.buttonStartEl.setAttribute('disabled', 'disabled');
    refs.inputDateEl.setAttribute('disabled', 'disabled');
    timeId = setInterval(() => {
      if (timerValueInMs <= 0) {
        clearInterval(timeId);
        return;
      }
      objTimerValue = convertMs(timerValueInMs);
      refs.daysEl.textContent = addLeadingZero(objTimerValue.days);
      refs.hoursEl.textContent = addLeadingZero(objTimerValue.hours);
      refs.minutesEl.textContent = addLeadingZero(objTimerValue.minutes);
      refs.secondsEl.textContent = addLeadingZero(objTimerValue.seconds);
      timerValueInMs -= INTERVAL;
    }, INTERVAL);
  });
}