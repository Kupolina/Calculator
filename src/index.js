import './index.html';

import './css/dark_theme.css';

import './css/white_theme.css';

import './change_theme';

import { clearAll } from './scripts/clear';

import { doOperations } from './scripts/operations';

import { changeSign } from './scripts/changeSign';

import { getResult } from './scripts/result';

import {
  a,
  b,
  sign,
  processfinish,
  waitNumFlag,
  operationFinish,
  setNewSecondNumber,
  setNewFirstNumber,
  setIsOperationFinished,
  setIsProcessFinished,
  setNewArithmeticSign,
  setIsWaitNumFlag,
} from './main';

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '%'];

export const out = document.querySelector('.screen__elem');

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.plus-minus').onclick = changeSign;
document.querySelector('.equal').onclick = getResult;

document.querySelector('.calc__buttons').onclick = (event) => {
  if (!event.target.classList.contains('calc__button')) return;
  if (event.target.classList.contains('ac')) return;
  if (event.target.classList.contains('plus-minus')) return;
  if (event.target.classList.contains('equal')) return;

  out.textContent = '';

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (operationFinish === true) {
      clearAll();
      out.textContent = 0;
      setIsOperationFinished(false);
    }
    if (b === '' && sign === '') {
      if (a.length <= 6) {
        if (key === '.' && a.includes('.')) {
          out.textContent = a;
        } else if (key === '0' && a.includes('0') && !a.includes('.') && a[0] === '0') {
          out.textContent = a;
        } else {
          setNewFirstNumber(a + key);
          out.textContent = a;
        }
        setIsOperationFinished(false);
      }
      out.textContent = a;
    } else if (a !== '' && b !== '' && processfinish) {
      setNewSecondNumber(key);
      setIsProcessFinished(false);
      out.textContent = b;
    } else {
      if (b.length <= 6) {
        if (key === '.' && b.includes('.')) {
          out.textContent = b;
        } else if (key === '0' && b.includes('0') && !b.includes('.') && b[0] === '0') {
          out.textContent = b;
        } else {
          setNewSecondNumber(b + key);
          out.textContent = b;
        }
      }
      out.textContent = b;
    }
    return;
  }

  if (action.includes(key) && a !== '' && b !== '' && waitNumFlag) {
    doOperations();
    setIsProcessFinished(true);
    out.textContent = a;
  }

  if (action.includes(key)) {
    setIsWaitNumFlag(true);
    setNewArithmeticSign(key);
    setIsOperationFinished(false);
    out.textContent = a;
  }
};
