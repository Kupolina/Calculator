import './index.html';

import './css/dark_theme.css';

import './css/white_theme.css';

import './change_theme';

import './scripts/clear';

let a = ''; // first number
let b = ''; // second number
let sign = ''; // sign variable
let processfinish = false; // process flag
let waitNumFlag = false; // number input completed flag
let operationFinish = false; // operation flag

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '%'];

const out = document.querySelector('.screen__elem');

function clearAll() {
  a = '';
  b = '';
  sign = '';
  processfinish = false;
  out.textContent = 0;
  console.log('ClearAll');
}

/* function fixValue(value){
  value = String(value);
  if (value.length > 6 && a.includes('.')) {
    value = value.toFixed(3);
  }
} */

function doOperations() {
  if (b === '' && sign !== '%') {
    b = a;
  }
  switch (sign) {
    case '+':
      a = (+a) + (+b);
      break;
    case '-':
      a -= b;
      break;
    case 'x':
      a *= b;
      break;
    case '/':
      if (b === '0') {
        out.textContent = 'Error';
        a = '';
        b = '';
        sign = '';
        return;
      }
      a /= b;
      break;
    case '%':
      if (b === '') {
        b = 0;
      }
      a /= 100;
      out.textContent = a;
      break;
    default:// do nothing
  }
}

function changeSign() {
  if (b === '' && a !== '') {
    a *= -1;
    out.textContent = a;
    console.log('a : Sign have changed');
  } else if (a !== '' && b !== '' && operationFinish) {
    a *= -1;
    out.textContent = a;
    console.log('else if : Sign have changed');
  } else {
    b *= -1;
    out.textContent = b;
    console.log('b : Sign have changed');
  }
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.plus-minus').onclick = changeSign;

document.querySelector('.calc__buttons').onclick = (event) => {
  if (!event.target.classList.contains('calc__button')) return;
  if (event.target.classList.contains('ac')) return;
  if (event.target.classList.contains('plus-minus')) return;

  out.textContent = '';

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (operationFinish === true) {
      clearAll();
      out.textContent = 0;
      operationFinish = false;
    }
    if (b === '' && sign === '') {
      if (a.length <= 6) {
        if (key === '.' && a.includes('.')) {
          a += '';
          out.textContent = a;
        } else if (key === '0' && a.includes('0') && !a.includes('.') && a[0] === '0') {
          a += '';
          out.textContent = a;
        } else {
          a += key;
          out.textContent = a;
          console.log(a);
        }
        operationFinish = false;
      }
      out.textContent = a;
    } else if (a !== '' && b !== '' && processfinish) {
      b = key;
      processfinish = false;
      out.textContent = b;
    } else {
      if (b.length <= 6) {
        if (key === '.' && b.includes('.')) {
          b += '';
          out.textContent = b;
        } else if (key === '0' && b.includes('0') && !b.includes('.') && b[0] === '0') {
          b += '';
          out.textContent = b;
        } else {
          b += key;
          out.textContent = b;
          console.log(b);
        }
      }
      out.textContent = b;
    }
    return;
  }

  if (action.includes(key) && a !== '' && b !== '' && waitNumFlag) {
    doOperations();
    processfinish = true;
    out.textContent = a;
  }

  if (action.includes(key)) {
    waitNumFlag = true;
    sign = key;
    out.textContent = a;
    operationFinish = false;
    return;
  }

  if (key === '=') {
    doOperations();
    waitNumFlag = false;
    processfinish = true;
    operationFinish = true;
    out.textContent = a;
  }
};
