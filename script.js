const currentCol = document.querySelector('#current-col');
const colOneInput = document.querySelector('#color1')
const colTwoInput = document.querySelector('#color2');
const body = document.getElementsByTagName('body');
const insertBef = document.querySelector('#insert');
const randomCol = document.querySelector('#random');
const degreesSlider = document.querySelector('#degrees');
let buttonRand;

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

    let copyBtn = document.createElement('button');
    let copyBtnText = document.createTextNode('Copy To Clipboard')
    copyBtn.className += 'copy-clip'
    copyBtn.appendChild(copyBtnText);

    document.body.insertBefore(copyBtn, insertBef)

colOneInput.addEventListener('input', function() {
    buttonRand = false;
    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);
   document.body.style.background = `linear-gradient(to left, ${colTwoInput.value}, ${colOneInput.value})`
   //currentCol.textContent = document.body.style.background;
   currentCol.textContent = `background: linear-gradient(to right, rgb(${toRgbOne}), rgb(${toRgbTwo}))`;
})

colTwoInput.addEventListener('input', () => {
    buttonRand = false;
    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);
   document.body.style.background = `linear-gradient(to right, ${colOneInput.value}, ${colTwoInput.value})`

   //currentCol.textContent = document.body.style.background;

   currentCol.textContent = `background: linear-gradient(to right, rgb(${toRgbOne}), rgb(${toRgbTwo}))`;
})

let randomColor = randomizeCol();
let randomColor2 = randomizeCol();
let thisColor;

let randomC1;
let randomC2;

randomCol.addEventListener('click', () => {
    //document.body.insertBefore(copyBtn, insertBef)
   randomC1 = randomizeCol(colOneInput.value);
   randomC2 = randomizeCol(colTwoInput.value);
   thisColor = document.body.style.background = `linear-gradient(to right, ${randomC1}, ${randomC2})`
// let replaceLetters = thisColor.replace('linear-gradient(to right, ', '');
// let popLastParanth = Array.from(replaceLetters).slice(0, -1);
//currentCol.textContent = `${popLastParanth.join('')}`; //to display only RGB values without linear-gradient property

currentCol.textContent = document.body.style.background;
//currentCol.textContent = `background: ${thisColor}`;
buttonRand = true;
})


copyBtn.addEventListener('click', () => { 
    copy(currentCol.textContent)
})

degreesSlider.addEventListener('input', (e) => {
    //numInputDegrees.value = e.target.value;
    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);

    if (buttonRand == true) {
    document.body.style.background = `linear-gradient(${e.target.value}deg, ${randomC1}, ${randomC2})`
    currentCol.textContent = document.body.style.background;
    //`background: linear-gradient(${e.target.value}deg, rgb(${document.body.style.background}), rgb(${document.body.style.background}))`;
    } else if (buttonRand == false) {
        document.body.style.background = `linear-gradient(${e.target.value}deg, ${colOneInput.value}, ${colTwoInput.value})`
        currentCol.textContent = document.body.style.background;
        //`background: linear-gradient(${e.target.value}deg, rgb(${}), rgb(${document.body.style.background}))`;
    } else {
        document.body.style.background = `linear-gradient(${e.target.value}deg, ${colOneInput.value}, ${colTwoInput.value})`
        currentCol.textContent = `background: linear-gradient(${e.target.value}deg, rgb(${toRgbOne}), rgb(${toRgbTwo}))`;
    }

})

function randomizeCol() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function copy(text) {
    let input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}