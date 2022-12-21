import './index.html';

import './css/dark_theme.css';

import './css/white_theme.css';

import './change_theme';

let a = ''; // first number
let b = ''; // second number
let sign = ''; // sign variable
let finish = false; // operation flag
let waitNumFlag = false; // number input completed flag

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '%', '+/-'];

const out = document.querySelector('.screen__elem');

function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.calc__buttons').onclick = (event) => {
  if (!event.target.classList.contains('calc__button')) return;
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      if (a.length <= 6) {
        if (key === '.' && a.includes('.')) {
          a += '';
          out.textContent = a;
        } else {
          a += key;
          out.textContent = a;
        }
      }
      out.textContent = a;
    } else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      if (b.length <= 6) {
        if (key === '.' && b.includes('.')) {
          b += '';
          out.textContent = b;
        } else {
          b += key;
          out.textContent = b;
        }
      }
      out.textContent = b;
    }
    return;
  }

  if (action.includes(key) && a !== '' && b !== '' && waitNumFlag) {
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
        a = (a * b).toFixed(3);
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Error';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = (a / b).toFixed(3);
        break;
      case '+/-':
        a *= (-1);
        break;
      case '%':
        a /= 100;
        break;
      default:// do nothing
    }
    finish = true;
    out.textContent = a;
  }

  if (action.includes(key)) {
    waitNumFlag = true;
    sign = key;
    out.textContent = a;

    return;
  }

  if (key === '=') {
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
        a = (a * b).toFixed(3);
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Error';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = (a / b).toFixed(3);
        break;
      case '+/-':
        a *= (-1);
        break;
      case '%':
        a /= 100;
        break;
      default: // do nothing
    }
    waitNumFlag = false;
    finish = true;
    out.textContent = a;
  }
};
