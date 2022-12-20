import './index.html';

import './css/dark_theme.css';

import './css/white_theme.css';

import './change_theme';

let a = ''; // first number
let b = ''; // second number
let sign = ''; // sign variable
let finish = false; // operation flag
let opflag = false;

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
      if (a.length <= 6) {
        b += key;
      }
      out.textContent = b;
    }
    return;
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }

  if (key === '=') {
    if (b === '' && sign !== '%') {
      b = a;
      opflag = true;
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
        a = (a / b).toFixed(5);
        break;
      case '+/-':
        a *= (-1);
        break;
      case '%':
        if (opflag && a !== '') {
          b = '';
          opflag = false;
          return;
        }
        /* eslint-disable no-unused-expressions */
        b !== '' ? a = (a * b) / 100 : a /= 100;
        break;
      default: // nothing
    }
    finish = true;
    out.textContent = a;
  }
};
