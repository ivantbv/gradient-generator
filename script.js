const currentCol = document.querySelector('#current-col');
const colOneInput = document.querySelector('#color1')
const colTwoInput = document.querySelector('#color2');
const body = document.getElementsByTagName('body');
const insertBef = document.querySelector('#insert')
//const copyToClip = document.querySelector('.copy-clip');
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

    let copyBtn = document.createElement('button');
    let copyBtnText = document.createTextNode('Copy To Clipboard')
    copyBtn.className += 'copy-clip'
    copyBtn.appendChild(copyBtnText);

colOneInput.addEventListener('input', function() {
    document.body.insertBefore(copyBtn, insertBef)

    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);
   document.body.style.background = `linear-gradient(to left, ${colTwoInput.value}, ${colOneInput.value})`
   currentCol.textContent = `rgb(${toRgbOne}), rgb(${toRgbTwo})`;
})



colTwoInput.addEventListener('input', () => {
    document.body.insertBefore(copyBtn, insertBef)
    
    let toRgbOne = hexToRgb(colOneInput.value);
    let toRgbTwo = hexToRgb(colTwoInput.value);
   document.body.style.background = `linear-gradient(to right, ${colOneInput.value}, ${colTwoInput.value})`
//background: linear-gradient(to right, rgba(243, 128, 87, 0.863), #3c7981cc);
currentCol.textContent = `rgb(${toRgbOne}), rgb(${toRgbTwo})`
})

copyBtn.addEventListener('click', () => { 
    copy(currentCol.textContent)
})

function copy(text) {
    let input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}