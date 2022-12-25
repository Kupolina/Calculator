// eslint-disable-next-line import/prefer-default-export
export function doOperations() {
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
