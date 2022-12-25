export function clearAll(a, b, sign, out, processfinish) {
  a = '';
  b = '';
  sign = '';
  out.textContent = 0;
  processfinish = false;
  console.log('ClearAll');
  }

  document.querySelector('.ac').onclick = clearAll;
// eslint-disable-next-line no-restricted-exports
