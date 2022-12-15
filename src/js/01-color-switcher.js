
const startBtn = document.querySelector('button[data-start="start"');
const stopBtn = document.querySelector('button[data-stop="stop"');
      
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
    
const bodyColor = document.body;

const colorChenger = {
  isActive: false,
    startColor() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.setInterval(() => {
          bodyColor.style.backgroundColor = getRandomHexColor();
          console.log(bodyColor.style.backgroundColor);
        }, 1000);
    },
    stopColor() {
        this.isActive = fasle;
        clearInterval(this.intervalId);
    }
};

startBtn.addEventListener('click', e => {
    colorChenger.startColor()
});

stopBtn.addEventListener('click', e => {
  colorChenger.stopColor()
});



