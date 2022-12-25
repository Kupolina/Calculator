import {
  a,
  b,
  operationFinish,
  setNewSecondNumber,
  setNewFirstNumber
} from '../main';

import { out } from '../index';
// eslint-disable-next-line import/prefer-default-export
export function changeSign() {
  if (b === '' && a !== '') {
    setNewFirstNumber(a * -1);
    out.textContent = a;
  } else if (a !== '' && b !== '' && operationFinish) {
    setNewFirstNumber(a * -1);
    out.textContent = a;
  } else {
    setNewSecondNumber(b * -1);
    out.textContent = b;
  }
}
