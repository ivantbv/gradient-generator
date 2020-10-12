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
const percentSlider1 = document.querySelector('.percent-col1');
const percentSlider2 = document.querySelector('.percent-col2')
let thisColor;
let buttonRand;
let radialOrLinear = false;
let randomC1;
let randomC2;
let randomC3;
let colOneValue;
let degreesSlide = false;
let percentSliderBool = false;
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
        colOneInput.value = '#0fd6f0'
        colTwoInput.value = '#5242cd'
        percentSlider1.value = 0;
        percentSlider2.value = 100;
        percentSlider3.value = 0;
    }
     if (currentCol.textContent == 'background: radial-gradient(circle, rgb(238, 196, 124), rgb(205, 66, 200))') {
        colOneInput.value = '#eec47c'
        colTwoInput.value = '#cd42c8'
        percentSlider1.value = 0;
        percentSlider2.value = 100;
        percentSlider3.value = 0;
    }
    if (currentCol.textContent == 'background: linear-gradient(to right, rgb(152, 26, 255), rgb(234, 83, 83))') {
        colOneInput.value = '#981aff'
        colTwoInput.value = '#ea5353'
        percentSlider1.value = 0;
        percentSlider2.value = 100;
    }
    if (currentCol.textContent == 'background: linear-gradient(360deg, rgb(198, 6, 231), rgb(170, 111, 105))') {
        colOneInput.value = '#c606e7'
        colTwoInput.value = '#aa6f69'
        percentSlider1.value = 0;
        percentSlider2.value = 100;
    }
    if (currentCol.textContent == 'background: linear-gradient(360deg, rgb(129, 26, 255), rgb(32, 84, 111))') {
        colOneInput.value = '#811aff'
        colTwoInput.value = '#20546f'
        percentSlider1.value = 0;
        percentSlider2.value = 100;
    }
    if (currentCol.textContent == 'background: radial-gradient(circle at 50% center, rgb(81, 177, 180), rgb(228, 54, 207), rgb(250, 89, 97))') {
        colOneInput.value = '#e436cf' 
        colTwoInput.value = '#fa5961'
        colThreeInput.value = '#51b1b4'
        percentSlider1.value = 50;
        percentSlider2.value = 100;
        percentSlider3.value = 0;
    }
    if (currentCol.textContent == 'background: radial-gradient(circle at 50% center, rgb(246, 70, 70), rgb(35, 57, 139), rgb(12, 17, 79))') {
        colOneInput.value =  '#23398b'
        colTwoInput.value = '#0c114f'
        colThreeInput.value = '#f64646'
        percentSlider1.value = 50;
        percentSlider2.value = 100;
        percentSlider3.value = 0;
    }
    if (currentCol.textContent == 'background: radial-gradient(circle at 50% center, rgb(112, 14, 173), rgb(159, 44, 137), rgb(31, 49, 105))') {
        colTwoInput.value =  '#1f3169'
        colOneInput.value = '#9f2c89'
        colThreeInput.value = '#700ead'
        percentSlider1.value = 50;
        percentSlider2.value = 100;
        percentSlider3.value = 0;
    }
    if (currentCol.textContent == 'background: radial-gradient(circle, rgb(236, 81, 83), rgb(142, 122, 240))') {
        colOneInput.value = '#ec5153';
        colTwoInput.value = '#8e7af0';
        percentSlider1.value = 0;
        percentSlider2.value = 100;
        percentSlider3.value = 0;
    }
}))

function percentSliders() {
        percentSliderBool = true
             if (radialOrLinear == true) {
             document.body.style.background = `radial-gradient(circle, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
             currentColorText();
          } else if (radialOrLinear == false) {
         document.body.style.background = `linear-gradient(to right, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
         currentColorText();
          }
      
          if (/*buttonRand == false && */ checkBox.checked && radialOrLinear == true) {
             document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value} ${percentSlider3.value}%, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%`
             currentColorText();
         }  
    
         if (degreesSlide == true && radialOrLinear == false) {
            document.body.style.background = `linear-gradient(${degreesSlider.value}deg, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
                currentColorText()
            }
          colOneValue = colOneInput.value;
          h2Tag.style.background = `${document.body.style.background}`;
}


percentSlider2.addEventListener('input', (e) => {
    percentSliders(); 
 })

 percentSlider1.addEventListener('input', (e) => {
    percentSliders();
 })

colThreeInput.classList.add('col3');

const percentSlider3 = document.createElement('input')
percentSlider3.type = 'range'
percentSlider3.value = 0;
percentSlider3.min = 0;
percentSlider3.max = 100;
percentSlider3.classList.add('percent-col3')

percentSlider3.addEventListener('input', (e) => {
    percentSliders();
})

checkBox.addEventListener('click', () => {

    if (checkBox.checked) {
    colorsContainer.appendChild(colThreeInput);
    colorsContainer.appendChild(percentSlider3)
    percentSlider3.style.display = 'inline-block'
   //percentSlider1.value = 50;
        // if (buttonRand == true && radialOrLinear == true) {
        //   thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3} ${percentSlider3.value}%, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
        //     currentColorText();   
        // } else if (buttonRand == true && radialOrLinear == true) {
        // thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3} ${percentSlider3.value}%, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
        // currentColorText();  
         //}
        // else {

        if (radialOrLinear == true) {
            document.body.style.background = `radial-gradient(circle, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
            currentColorText();
         } else if (radialOrLinear == false) {
            document.body.style.background = `linear-gradient(to right, ${colOneValue} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
            currentColorText();
        }
        document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value} ${percentSlider3.value}%, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
        currentColorText();

    } else if (checkBox.checked == false) {
        colorsContainer.removeChild(colThreeInput);
        colorsContainer.removeChild(percentSlider3)

        if (radialOrLinear == false && buttonRand == false) {
            document.body.style.background = `linear-gradient(to right, ${colOneValue} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
            currentColorText();
        } else if (radialOrLinear == true && buttonRand == false) {
            document.body.style.background = `radial-gradient(circle, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
            currentColorText();
        }

        if (buttonRand == true) {
           document.body.style.background = `radial-gradient(circle, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
            currentColorText();
        } else {
            if (radialOrLinear == true) {
                document.body.style.background = `radial-gradient(circle, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
                currentColorText();
             } else if (radialOrLinear == false) {
                document.body.style.background = `linear-gradient(to right, ${colOneValue} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
                currentColorText();
            } 
        }
    }

 if (checkBox.checked == true && radialOrLinear == true && buttonRand == true) {
    thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3} ${percentSlider3.value}%, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
    currentColorText();
    //rgbValuesForColInputs(35, -1, colThreeInput);
    if (percentSlider3.value == 100) {
        rgbValuesForColWithDegrees2(31, -4, colThreeInput);
       } else if (percentSlider3.value > 9 && percentSlider3.value != 100) {
        rgbValuesForColWithDegrees2(31, -3, colThreeInput);
       } else {
        rgbValuesForColWithDegrees2(31, -2, colThreeInput);
       }
}
    h2Tag.style.background = `${document.body.style.background}`;
})

radialGrad.addEventListener('change', () => {
    colThreeInput.style.display = 'inline-block';
    radialOrLinear = true;
    radialOptionsDiv.style.display = 'grid';
    sliderWrap.style.display = 'none';
    if (checkBox.checked == true && radialOrLinear == true) {
        percentSlider3.style.display = 'inline-block';
    } else {
        percentSlider3.style.display = 'none'
    }
    
    if (checkBox.checked == true) {
        document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value} ${percentSlider3.value}%, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
        currentColorText();
    } else if (percentSliderBool == true) {
        document.body.style.background = `radial-gradient(circle, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
         currentColorText();
    } else if (buttonRand == false && checkBox.checked && radialOrLinear == true) {
        document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value} ${percentSlider3.value}%, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
        currentColorText();

    } else if (buttonRand == true && checkBox.checked) {
        thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3} ${percentSlider3.value}%, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
    currentColorText();
    const sliced = thisColor.slice(35);
    const R = sliced.substr(0, sliced.indexOf(','));
    const G = thisColor.slice(35).split(',')[1];
    const B = thisColor.slice(35).split(',')[2].slice(0, -1);
    colThreeInput.value = rgbToHex(Number(R),Number(G),Number(B));
    } else if (buttonRand == true) {
        document.body.style.background = `radial-gradient(circle, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
        currentColorText();
        
    } else {
     document.body.style.background = `radial-gradient(circle, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
     currentColorText();
    }
   
   if (document.body.style.background == `radial-gradient(circle, rgb(60, 121, 129), rgb(235, 139, 104))` && checkBox.checked) {
    document.body.style.background = `radial-gradient(circle at 50% center, rgb(0, 0, 0), rgb(235, 139, 104), rgb(60, 121, 129))`
    currentColorText();
   }
   h2Tag.style.background = `${document.body.style.background}`;
})

linearGrad.addEventListener('change', () => {
    radialOptionsDiv.style.display = 'none';
    radialOrLinear = false;
    sliderWrap.style.display = 'grid';

    if (colThreeInput || checkBox.checked) {
        colThreeInput.style.display = 'none';
        percentSlider3.style.display = 'none'
    }

    if (percentSliderBool == true && degreesSlide == true) {
        document.body.style.background = `linear-gradient(${degreesSlider.value}deg, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
         currentColorText(); 
      } else if (percentSliderBool == true) {
        document.body.style.background = `linear-gradient(to right, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
         currentColorText();
    } else if (buttonRand == true && degreesSlide == true) {
        document.body.style.background = `linear-gradient(${degreesSlider.value}deg, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
        currentColorText();
    } 
    
    else if (buttonRand == true) {
        document.body.style.background = `linear-gradient(to right, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
        currentColorText();
    } else{
     document.body.style.background = `linear-gradient(to right, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
     currentColorText();
    }
    h2Tag.style.background = `${document.body.style.background}`;
})

// const hexToRgb = hex =>
//   hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
//              ,(m, r, g, b) => '#' + r + r + g + g + b + b)
//     .substring(1).match(/.{2}/g)
//     .map(x => parseInt(x, 16))

    let copyBtn = document.createElement('button');
    let copyBtnText = document.createTextNode('Copy To Clipboard')
    copyBtn.className += 'copy-clip'
    copyBtn.appendChild(copyBtnText);

    document.body.insertBefore(copyBtn, insertBef)

colOneInput.addEventListener('input', function() {
    buttonRand = false;
    percentSliders();
})

colTwoInput.addEventListener('input', () => {
    buttonRand = false;
    percentSliders()
})

colThreeInput.addEventListener('input', () => {
    buttonRand = false;
    document.body.style.background = `radial-gradient(circle at 50%, ${colThreeInput.value} ${percentSlider3.value}%, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
    currentColorText();
    h2Tag.style.background = `${document.body.style.background}`;
})

let randomColor = randomizeCol();
let randomColor2 = randomizeCol();

randomCol.addEventListener('click', () => {
   randomC1 = randomizeCol(colOneInput.value);
   randomC2 = randomizeCol(colTwoInput.value);
   randomC3 = randomizeCol(colThreeInput.value);
   buttonRand = true;

    if (radialOrLinear == true && percentSliderBool == true) {
        thisColor = document.body.style.background = `radial-gradient(circle, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)` 
    currentColorText()
        rgbValuesForColWithDegrees(26, -4, colOneInput)

        if (percentSlider2.value < 10) {
        //rgbValuesForColWithDegrees2(-15, -5, colTwoInput)
          const R2 = thisColor.slice(-17).substr(0, thisColor.slice(-17).indexOf(',')).replace(/[^0-9.]/g,"")
        const G2 = thisColor.slice(-14).split(',')[1].replace(/[^0-9.]/g,"");
        const B2 = thisColor.slice(-14).split(',')[2].slice(0, -5).replace(/[^0-9.]/g,"")
        console.log(R2, G2, B2)
        colTwoInput.value = rgbToHex(Number(R2),Number(G2),Number(B2));
    } else {
       rgbValuesForColWithDegrees2(-19, -5, colTwoInput)
    }
  
    } else if (radialOrLinear == true) {
    thisColor = document.body.style.background = `radial-gradient(circle, ${randomC1}, ${randomC2})` 
    currentColorText()
    rgbValuesForColInputs(28, -1, colOneInput);
    const R2 = thisColor.slice(-13).substr(0, thisColor.slice(-13).indexOf(',')).replace(/[^0-9.]/g,"")
    const G2 = thisColor.slice(-13).split(',')[1];
    const B2 = thisColor.slice(-13).split(',')[2].slice(0, -2);
    colTwoInput.value = rgbToHex(Number(R2),Number(G2),Number(B2));

    } else if (degreesSlide == true  && percentSliderBool == true) {
      thisColor = document.body.style.background = `linear-gradient(${degreesSlider.value}deg, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
         currentColorText();       
        rgbValuesForColWithDegrees(26, -4, colOneInput)
       if ( percentSlider2.value < 10)  {
        const R2 = thisColor.slice(-18).substr(0, thisColor.slice(-18).indexOf(',')).replace(/[^0-9.]/g,"")
        const G2 = thisColor.slice(-18).split(',')[1].replace(/[^0-9.]/g,"");
        const B2 = thisColor.slice(-14).split(',')[2].slice(0, -5).replace(/[^0-9.]/g,"");

        colTwoInput.value = rgbToHex(Number(R2),Number(G2),Number(B2));
    } else {
       rgbValuesForColWithDegrees2(-18, -6, colTwoInput)
        }
      } 
      else if (degreesSlide == true && radialOrLinear == false  || degreesSlide == false && radialOrLinear == false) {
        thisColor = document.body.style.background = `linear-gradient(${degreesSlider.value}deg, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
        currentColorText();
        rgbValuesForColWithDegrees(26, -4, colOneInput)
        percentSlider2.value < 10 ? rgbValuesForColWithDegrees2(-14, -5, colTwoInput) : rgbValuesForColWithDegrees2(-19, -6, colTwoInput)
      } else if (radialOrLinear == false) {

    thisColor = document.body.style.background = `linear-gradient(to right, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
    currentColorText()
    rgbValuesForColInputs(30, -1, colOneInput)

    const R2 = thisColor.slice(-13).substr(0, thisColor.slice(-13).indexOf(',')).replace(/[^0-9.]/g,"")
    const G2 = thisColor.slice(-13).split(',')[1];
    const B2 = thisColor.slice(-13).split(',')[2].slice(0, -2);
    colTwoInput.value = rgbToHex(Number(R2),Number(G2),Number(B2));
}

// if (checkBox.checked && radialOrLinear == true && degreesSlide == true) {
//     thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3} ${percentSlider3.value}%, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
//     currentColorText();
// }

if (checkBox.checked && radialOrLinear == true) {
   thisColor = document.body.style.background = `radial-gradient(circle at 50%, ${randomC3} ${percentSlider3.value}%, ${randomC1} ${percentSlider1.value}%, ${randomC2} ${percentSlider2.value}%)`
   currentColorText();
   if (percentSlider3.value == 100) {
    rgbValuesForColWithDegrees2(31, -4, colThreeInput);
   } else if (percentSlider3.value > 9 && percentSlider3.value != 100) {
    rgbValuesForColWithDegrees2(31, -3, colThreeInput);
   } else {
    rgbValuesForColWithDegrees2(31, -2, colThreeInput);
   }
}
h2Tag.style.background = `${document.body.style.background}`;

})

function rgbValuesForColInputs(slice1, slice2, whichColInput) {
    const sliced = thisColor.slice(slice1);
    const R = sliced.substr(0, sliced.indexOf(','));
    const G = thisColor.slice(slice1).split(',')[1];
    const B = thisColor.slice(slice1).split(',')[2].slice(0, slice2);

    return whichColInput.value = rgbToHex(Number(R),Number(G),Number(B));
}

//similar to the above function, but with more regex on couple of places
function rgbValuesForColWithDegrees(slice1, slice2, whichColInput) {
    let sliced = thisColor.slice(slice1);
    const R = sliced.substr(0, sliced.indexOf(',')).replace(/[^0-9.]/g, '');
    const G = thisColor.slice(slice1).split(',')[1]
    const B = thisColor.slice(slice1).split(',')[2].slice(0, slice2).replace(/[^0-9.]/g,"");
    return whichColInput.value = rgbToHex(Number(R),Number(G),Number(B));
}

function rgbValuesForColWithDegrees2(slice1, slice2, whichColInput) {
    const R2 = thisColor.slice(slice1).substr(0, thisColor.slice(slice1).indexOf(',')).replace(/[^0-9.]/g,"")
    const G2 = thisColor.slice(slice1).split(',')[1].replace(/[^0-9.]/g,"");
    const B2 = thisColor.slice(slice1).split(',')[2].slice(0, slice2).replace(/[^0-9.]/g,"");
    whichColInput.value = rgbToHex(Number(R2),Number(G2),Number(B2));
}

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
degreesSlide = true;
if (percentSliderBool == true && radialOrLinear == false) {
    document.body.style.background = `linear-gradient(${degreesSlider.value}deg, ${colOneInput.value} ${percentSlider1.value}%, ${colTwoInput.value} ${percentSlider2.value}%)`
        currentColorText()
    } else if (buttonRand == true) {
    document.body.style.background = `linear-gradient(${e.target.value}deg, ${randomC1}, ${randomC2})`
        currentColorText()
    } else if (buttonRand == false) {
        document.body.style.background = `linear-gradient(${e.target.value}deg, ${colOneInput.value}, ${colTwoInput.value})`
        currentColorText()
    } else {
        document.body.style.background = `linear-gradient(${e.target.value}deg, ${colOneInput.value}, ${colTwoInput.value})`
        currentColorText();
    }
    h2Tag.style.background = `${document.body.style.background}`;
})

function currentColorText() {
    return currentCol.textContent = `background: ${document.body.style.background}`;
}

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
