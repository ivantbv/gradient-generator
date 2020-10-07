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
const userPicks = document.querySelectorAll('.user-picks');
const h2Tag = document.querySelector('#h2');

let colThreeInput = document.createElement('input');
colThreeInput.type = 'color';

userPicks.forEach(color => color.addEventListener('click', (e) => {
    let style = window.getComputedStyle(e.target)
    let col = style.getPropertyValue('background');
 
    document.body.style.background = col;
    currentCol.textContent = `background: ${document.body.style.background}`.slice(0,-67)
    h2Tag.style.background = `${document.body.style.background}`

    if (currentCol.textContent == 'background: radial-gradient(circle, rgb(15, 214, 240), rgb(82, 66, 205))') {
        colTwoInput.value = '#0fd6f0'
        colOneInput.value = '#5242cd'
    }
     if (currentCol.textContent == 'background: radial-gradient(circle, rgb(238, 196, 124), rgb(205, 66, 200))') {
        colTwoInput.value = '#eec47c'
        colOneInput.value = '#cd42c8'
    }
    if (currentCol.textContent == 'background: linear-gradient(to right, rgb(152, 26, 255), rgb(234, 83, 83))') {
        colOneInput.value = '#981aff'
        colTwoInput.value = '#ea5353'
    }
    if (currentCol.textContent == 'background: linear-gradient(360deg, rgb(198, 6, 231), rgb(170, 111, 105))') {
        colOneInput.value = '#c606e7'
        colTwoInput.value = '#aa6f69'
    }
    if (currentCol.textContent == 'background: linear-gradient(360deg, rgb(129, 26, 255), rgb(32, 84, 111))') {
        colOneInput.value = '#811aff'
        colTwoInput.value = '#20546f'
    }
    if (currentCol.textContent == 'background: radial-gradient(circle at 50% center, rgb(81, 177, 180), rgb(228, 54, 207), rgb(250, 89, 97))') {
        colOneInput.value = '#e436cf' 
        colTwoInput.value = '#fa5961'
        colThreeInput.value = '#51b1b4'
    }
    if (currentCol.textContent == 'background: radial-gradient(circle at 50% center, rgb(246, 70, 70), rgb(35, 57, 139), rgb(12, 17, 79))') {
        colOneInput.value =  '#23398b'
        colTwoInput.value = '#0c114f'
        colThreeInput.value = '#f64646'
    }
    if (currentCol.textContent == 'background: radial-gradient(circle at 50% center, rgb(112, 14, 173), rgb(159, 44, 137), rgb(31, 49, 105))') {
        colTwoInput.value =  '#1f3169'
        colOneInput.value = '#9f2c89'
        colThreeInput.value = '#700ead'
    }
    if (currentCol.textContent == 'background: radial-gradient(circle, rgb(236, 81, 83), rgb(142, 122, 240))') {
        colOneInput.value = '#ec5153';
        colTwoInput.value = '#8e7af0';
    }
}))

colThreeInput.classList.add('col3');

checkBox.addEventListener('click', () => {

    if (checkBox.checked) {
    colorsContainer.appendChild(colThreeInput);

    if (buttonRand == true && radialOrLinear == true) {
        document.body.style.background = `radial-gradient(circle at 50%, ${randomC3}, ${randomC1}, ${randomC2})`
            currentCol.textContent = `background: ${document.body.style.background}`    
        } else {

        if (radialOrLinear == true) {
            document.body.style.background = `radial-gradient(circle, ${colOneInput.value}, ${colTwoInput.value})`
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
            document.body.style.background = `radial-gradient(circle, ${colOneInput.value}, ${colTwoInput.value})`
            currentCol.textContent = `background: ${document.body.style.background}`
        }

        if (buttonRand == true) {
            document.body.style.background = `radial-gradient(circle, ${randomC1}, ${randomC2})`
            currentCol.textContent = `background: ${document.body.style.background}`
        } else {
            if (radialOrLinear == true) {
                document.body.style.background = `radial-gradient(circle, ${colOneInput.value}, ${colTwoInput.value})`
            currentCol.textContent = `background: ${document.body.style.background}`
             } else if (radialOrLinear == false) {
                document.body.style.background = `linear-gradient(to right, ${colOneValue}, ${colTwoInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
            } 
        }
    }

 if (checkBox.checked == true && radialOrLinear == true && buttonRand == true) {
    thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3}, ${randomC1}, ${randomC2})`
        currentCol.textContent = `background: ${document.body.style.background}`
    const sliced = thisColor.slice(35);
    const R = sliced.substr(0, sliced.indexOf(','));
    const G = thisColor.slice(35).split(',')[1];
    const B = thisColor.slice(35).split(',')[2].slice(0, -1);
    console.log(R, G, B);
    colThreeInput.value = rgbToHex(Number(R),Number(G),Number(B));
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
     document.body.style.background = `radial-gradient(circle, ${colOneInput.value}, ${colTwoInput.value})`
     currentCol.textContent = `background: ${document.body.style.background}`
    }
   
   if (document.body.style.background == `radial-gradient(circle, rgb(60, 121, 129), rgb(235, 139, 104))` && checkBox.checked) {
    document.body.style.background = `radial-gradient(circle at 50% center, rgb(0, 0, 0), rgb(235, 139, 104), rgb(60, 121, 129))`
    currentCol.textContent = `background: ${document.body.style.background}`
   }
   h2Tag.style.background = `${document.body.style.background}`;
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
       document.body.style.background = `radial-gradient(circle, ${colOneInput.value}, ${colTwoInput.value})`
       currentCol.textContent = `background: ${document.body.style.background}`
    } else if (radialOrLinear == false) {
   document.body.style.background = `linear-gradient(to left, ${colTwoInput.value}, ${colOneInput.value})`
   currentCol.textContent = `background: ${document.body.style.background}`
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
       document.body.style.background = `radial-gradient(circle, ${colOneInput.value}, ${colTwoInput.value})`
       currentCol.textContent = `background: ${document.body.style.background}`;
     } else if (radialOrLinear == false) {
   document.body.style.background = `linear-gradient(to right, ${colOneInput.value}, ${colTwoInput.value})`

   currentCol.textContent = `background: ${document.body.style.background}`;
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
    const sliced = thisColor.slice(28);
    const R = sliced.substr(0, sliced.indexOf(','));
    const G = thisColor.slice(28).split(',')[1];
    const B = thisColor.slice(28).split(',')[2].slice(0, -1);
    
    const R2 = thisColor.slice(-13).substr(0, thisColor.slice(-13).indexOf(',')).replace(/[^0-9.]/g,"")
    const G2 = thisColor.slice(-13).split(',')[1];
    const B2 = thisColor.slice(-13).split(',')[2].slice(0, -2);
    
    colOneInput.value = rgbToHex(Number(R),Number(G),Number(B));
    colTwoInput.value = rgbToHex(Number(R2),Number(G2),Number(B2));
    } else if (radialOrLinear == false) {

    thisColor = document.body.style.background = `linear-gradient(to right, ${randomC1}, ${randomC2})`
    currentCol.textContent = `background: ${document.body.style.background}`;
    const sliced = thisColor.slice(30); 
    const R = sliced.substr(0, sliced.indexOf(','))
    const G = thisColor.slice(30).split(',')[1]
    const B = thisColor.slice(30).split(',')[2].slice(0, -1);

    const R2 = thisColor.slice(-13).substr(0, thisColor.slice(-13).indexOf(',')).replace(/[^0-9.]/g,"")
    const G2 = thisColor.slice(-13).split(',')[1];
    const B2 = thisColor.slice(-13).split(',')[2].slice(0, -2);
    
    colOneInput.value = rgbToHex(Number(R),Number(G),Number(B));
    colTwoInput.value = rgbToHex(Number(R2),Number(G2),Number(B2));
}  

buttonRand = true;
if (checkBox.checked && radialOrLinear == true) {
   thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3}, ${randomC1}, ${randomC2})`
        currentCol.textContent = `background: ${document.body.style.background}`
    const sliced = thisColor.slice(35);
    const R = sliced.substr(0, sliced.indexOf(','));
    const G = thisColor.slice(35).split(',')[1];
    const B = thisColor.slice(35).split(',')[2].slice(0, -1);
    console.log(R, G, B);

    colThreeInput.value = rgbToHex(Number(R),Number(G),Number(B));
}
h2Tag.style.background = `${document.body.style.background}`;
})

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

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
const sideNav = document.getElementById("sidenavBar")
const mainNav = document.getElementById("main")

function openNav() {
    sideNav.style.width = "200px";
    
    mainNav.style.marginLeft = "200px";
    mainNav.style.display = 'none';
  }
  
  function closeNav() {
    sideNav.style.width = "0";
    document.getElementById("main").style.marginLeft= "0";

    mainNav.style.display = 'block';
  }
