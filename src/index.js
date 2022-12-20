import './index.html';

import './css/dark_theme.css';

import './css/white_theme.css';

import './change_theme';

let a = ''; // first number
let b = ''; // second number
let sign = ''; // sign variable
let finish = false; // operation flag
let opflag = false;
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

  console.log('-------------------input-------------------');

  console.log(`a=${a}`);
  console.log(`a type: ${typeof a}`);
  console.log(`b=${b}`);
  console.log(`sign=${sign}`);
  console.log(`finish flag=${finish}`);
  console.log(`key=${key}`);

  console.log('-------------------input-------------------');

  console.log('-------------------digit if-------------------');

  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      console.log('1 digit input');
      if (a.length <= 6) {
        a += key;
      }
      out.textContent = a;
    } else if (a !== '' && b !== '' && finish) {
      console.log('2 digit input');
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      console.log('3 digit input');
      if (a.toString().length <= 6) {
        console.log('b sum');
        b += key;
      }
      out.textContent = b;
    }
    console.log('-------------------digit if-------------------');
    return;
  }

  // if (action.includes(key)) {
  //     sign = key;
  //     out.textContent = sign;
  // }

  if (action.includes(key) && a != '' && b != '' && waitNumFlag) {
    console.log('before equals');
    console.log(`sign=${sign}`);
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
        }
        b !== '' ? a = a * b / 100 : a /= 100;
        break;
    }
    finish = true;
    out.textContent = a;
  }

  if (action.includes(key)) {
    console.log('switch to');
    waitNumFlag = true;
    sign = key;
    out.textContent = a;

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
        }
        b !== '' ? a = a * b / 100 : a /= 100;
        break;
    }
    waitNumFlag = false;
    // b = '';
    finish = true;
    out.textContent = a;
  }
};
