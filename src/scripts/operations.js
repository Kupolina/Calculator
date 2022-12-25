import {
  a,
  b,
  sign,
  setNewVariables,
  setNewSecondNumber,
  setNewFirstNumber,
} from '../main';

import { out } from '../index';
// eslint-disable-next-line import/prefer-default-export
export function doOperations() {
  if (b === '' && sign !== '%') {
    setNewSecondNumber(a);
  }
  switch (sign) {
    case '+':
      setNewFirstNumber((+a) + (+b));
      break;
    case '-':
      setNewFirstNumber(a - b);
      break;
    case 'x':
      setNewFirstNumber(a * b);
      break;
    case '/':
      if (b === '0') {
        out.textContent = 'Error';
        setNewVariables('', '', '');
        return;
      }
      setNewFirstNumber(a / b);
      break;
    case '%':
      if (b === '') {
        setNewSecondNumber(0);
      }
      setNewFirstNumber(a / 100);
      out.textContent = a;
      break;
    default:
      break; // do nothing
  }
}
