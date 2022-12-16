
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
      
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
    
const bodyColor = document.body;
let timerId = null;

const colorChenger = {
  isActive: false,
    startColor() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        timerId = setInterval(() => {
          bodyColor.style.backgroundColor = getRandomHexColor();
          console.log(bodyColor.style.backgroundColor);
        }, 1000);
    },
    stopColor() {
        this.isActive = true;        
        clearInterval(timerId);
    }
};

startBtn.addEventListener('click', e => {
    colorChenger.startColor()
});

stopBtn.addEventListener('click', e => {
  colorChenger.stopColor()
});



