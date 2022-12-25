import { setNewVariables } from '../main';
import { out } from '../index';

export function clearAll() {
  setNewVariables('', '', '', false);
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
