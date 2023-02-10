//Random color
const htmlBody = document.querySelector('.main')

const randomClickFunction = function () {
const colors = ['#FF7F50','#FFBF00','#DE3163','#9FE2BF','#40E0D0','#DFFF00','#6495ED','#CCCCFF'];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex]

htmlBody.style.backgroundColor = randomColor;

console.log(`The user click and set the color to ${randomColor}`);
}

htmlBody.onclick = randomClickFunction;