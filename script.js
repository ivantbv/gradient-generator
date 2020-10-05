const currentCol = document.querySelector('#current-col');
const colOneInput = document.querySelector('#color1')
const colTwoInput = document.querySelector('#color2');
const body = document.getElementsByTagName('body');
const insertBef = document.querySelector('#insert');
const randomCol = document.querySelector('#random');
const degreesSlider = document.querySelector('#degrees');
const radialGrad = document.querySelector('#radial');
const linearGrad = document.querySelector('#linear')
const sliderWrap = document.querySelector('.slide-wrapper')
const radialOptionsDiv = document.querySelector('.radial-options');
const checkBox = document.querySelector('#checkbox');
const colorsContainer = document.querySelector('.colors-div');
let buttonRand;
let radialOrLinear = false;
let randomC1;
let randomC2;
let randomC3;
let colOneValue;

const h2Tag = document.querySelector('#h2');

let colThreeInput = document.createElement('input');
colThreeInput.type = 'color';
colThreeInput.classList.add('col3');
checkBox.addEventListener('click', () => {

    if (checkBox.checked) {
    colorsContainer.appendChild(colThreeInput);

    if (buttonRand == true && radialOrLinear == true) {
        document.body.style.background = `radial-gradient(circle at 50%, ${randomC3}, ${randomC1}, ${randomC2})`
            currentCol.textContent = `background: ${document.body.style.background}`
    } else {
        if (radialOrLinear == true) {
            document.body.style.background = `radial-gradient(circle, ${colTwoInput.value}, ${colOneInput.value})`
        currentCol.textContent = `background: ${document.body.style.background}`
         } else if (radialOrLinear == false) {
            document.body.style.background = `linear-gradient(to right, ${colOneValue}, ${colTwoInput.value})`
 currentCol.textContent = `background: ${document.body.style.background}`
        }

    document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value}, ${colOneInput.value}, ${colTwoInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
    }
    } else if (checkBox.checked == false) {
        colorsContainer.removeChild(colThreeInput);

        if (radialOrLinear == false && buttonRand == false) {
            document.body.style.background = `linear-gradient(to right, ${colOneValue}, ${colTwoInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
        } else if (radialOrLinear == true && buttonRand == false) {
            document.body.style.background = `radial-gradient(circle, ${colTwoInput.value}, ${colOneInput.value})`
            currentCol.textContent = `background: ${document.body.style.background}`
        }

        if (buttonRand == true) {
            document.body.style.background = `radial-gradient(circle, ${randomC1}, ${randomC2})`
            currentCol.textContent = `background: ${document.body.style.background}`
        } else {
            if (radialOrLinear == true) {
                document.body.style.background = `radial-gradient(circle, ${colTwoInput.value}, ${colOneInput.value})`
            currentCol.textContent = `background: ${document.body.style.background}`
             } else if (radialOrLinear == false) {
                document.body.style.background = `linear-gradient(to right, ${colOneValue}, ${colTwoInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
            }
        }
    }
    h2Tag.style.background = `${document.body.style.background}`;
})

function colThreeFunc() {
colThreeInput.addEventListener('input', () => {
    document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value}, ${colOneInput.value}, ${colTwoInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
    buttonRand = false;
    h2Tag.style.background = `${document.body.style.background}`;
})
}
colThreeFunc();

function colThreeInputProperties() {
    document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value}, ${colOneInput.value}, ${colTwoInput.value})`
    currentCol.textContent = `background: ${document.body.style.background}`
}

radialGrad.addEventListener('change', () => {
    colThreeInput.style.display = 'inline-block';
    radialOrLinear = true;
    radialOptionsDiv.style.display = 'grid';
    
    sliderWrap.style.display = 'none';
    if (buttonRand == false && checkBox.checked && radialOrLinear == true) {
        document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value}, ${colOneInput.value}, ${colTwoInput.value})`
    currentCol.textContent = `background: ${document.body.style.background}`
    } else if (buttonRand == true && checkBox.checked) {
        document.body.style.background = `radial-gradient(circle at 50%, ${randomC3}, ${randomC1}, ${randomC2})`
        currentCol.textContent = `background: ${document.body.style.background}`
    } else if (buttonRand == true) {
        document.body.style.background = `radial-gradient(circle, ${randomC1}, ${randomC2})`
        currentCol.textContent = `background: ${document.body.style.background}`
    } else{
     document.body.style.background = `radial-gradient(circle, ${colTwoInput.value}, ${colOneInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
    }
   
   if (document.body.style.background == `radial-gradient(circle, rgb(60, 121, 129), rgb(235, 139, 104))` && checkBox.checked) {
    document.body.style.background = `radial-gradient(circle at 50% center, rgb(0, 0, 0), rgb(235, 139, 104), rgb(60, 121, 129))`
    currentCol.textContent = `background: ${document.body.style.background}`
   }
   h2Tag.style.background = `${document.body.style.background}`;
   console.log(colOneInput.value, colTwoInput.value);
})

linearGrad.addEventListener('change', () => {
    radialOptionsDiv.style.display = 'none';
    radialOrLinear = false;
    sliderWrap.style.display = 'grid';

    if (colThreeInput || checkBox.checked) {
        colThreeInput.style.display = 'none';
    }

    if (buttonRand == true) {
        document.body.style.background = `linear-gradient(to right, ${randomC1}, ${randomC2})`
        currentCol.textContent = `background: ${document.body.style.background}`
    } else{
     document.body.style.background = `linear-gradient(to right, ${colOneInput.value}, ${colTwoInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
    }
    h2Tag.style.background = `${document.body.style.background}`;
})

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

    if (radialOrLinear == true) {
        let toRgbOne = hexToRgb(colOneInput.value);
        let toRgbTwo = hexToRgb(colTwoInput.value);
       document.body.style.background = `radial-gradient(circle, ${colTwoInput.value}, ${colOneInput.value})`
       currentCol.textContent = `background: radial-gradient(circle, rgb(${toRgbTwo}), rgb(${toRgbOne}))`;
    } else if (radialOrLinear == false) {
    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);
   document.body.style.background = `linear-gradient(to left, ${colTwoInput.value}, ${colOneInput.value})`
   currentCol.textContent = `background: linear-gradient(to right, rgb(${toRgbOne}), rgb(${toRgbTwo}))`;
    }

    if ( buttonRand == false && checkBox.checked && radialOrLinear == true) {
        document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value}, ${colOneInput.value}, ${colTwoInput.value})`
    currentCol.textContent = `background: ${document.body.style.background}`
    } 
    colOneValue = colOneInput.value;
    h2Tag.style.background = `${document.body.style.background}`;
})

colTwoInput.addEventListener('input', () => {
    buttonRand = false;
    if (radialOrLinear == true) {
        let toRgbOne = hexToRgb(colOneInput.value);
        let toRgbTwo = hexToRgb(colTwoInput.value);
       document.body.style.background = `radial-gradient(circle, ${colTwoInput.value}, ${colOneInput.value})`
    
       currentCol.textContent = `background: radial-gradient(circle, rgb(${toRgbTwo}), rgb(${toRgbOne}))`;
     } else if (radialOrLinear == false) {

    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);
   document.body.style.background = `linear-gradient(to right, ${colOneInput.value}, ${colTwoInput.value})`

   currentCol.textContent = `background: linear-gradient(to right, rgb(${toRgbOne}), rgb(${toRgbTwo}))`;
     }

    if ( buttonRand == false && checkBox.checked && radialOrLinear == true) {
        document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value}, ${colOneInput.value}, ${colTwoInput.value})`
    currentCol.textContent = `background: ${document.body.style.background}`
    } 
    h2Tag.style.background = `${document.body.style.background}`;
})

let randomColor = randomizeCol();
let randomColor2 = randomizeCol();
let thisColor;

randomCol.addEventListener('click', () => {
   randomC1 = randomizeCol(colOneInput.value);
   randomC2 = randomizeCol(colTwoInput.value);
   randomC3 = randomizeCol(colThreeInput.value);

   if (radialOrLinear == true) {
    thisColor = document.body.style.background = `radial-gradient(circle, ${randomC1}, ${randomC2})` 
    currentCol.textContent = `background: ${document.body.style.background}`;
    } else if (radialOrLinear == false) {

    thisColor = document.body.style.background = `linear-gradient(to right, ${randomC1}, ${randomC2})`
    currentCol.textContent = `background: ${document.body.style.background}`;
}  

buttonRand = true;
if (checkBox.checked && radialOrLinear == true) {
    document.body.style.background = `radial-gradient(circle at 50%, ${randomC3}, ${randomC1}, ${randomC2})`
        currentCol.textContent = `background: ${document.body.style.background}`
}
h2Tag.style.background = `${document.body.style.background}`;
})

copyBtn.addEventListener('click', () => { 
    copy(currentCol.textContent)
})

degreesSlider.addEventListener('input', (e) => {
    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);

    if (buttonRand == true) {
    document.body.style.background = `linear-gradient(${e.target.value}deg, ${randomC1}, ${randomC2})`
    currentCol.textContent = `background: ${document.body.style.background}`;
    } else if (buttonRand == false) {
        document.body.style.background = `linear-gradient(${e.target.value}deg, ${colOneInput.value}, ${colTwoInput.value})`
        currentCol.textContent = `background: ${document.body.style.background}`;
    } else {
        document.body.style.background = `linear-gradient(${e.target.value}deg, ${colOneInput.value}, ${colTwoInput.value})`
        currentCol.textContent = `background: linear-gradient(${e.target.value}deg, rgb(${toRgbOne}), rgb(${toRgbTwo}))`;
    }
    h2Tag.style.background = `${document.body.style.background}`;
})

function randomizeCol() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
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
