// eslint-disable-next-line import/prefer-default-export
export function changeSign() {
  if (b === '' && a !== '') {
    a *= -1;
    out.textContent = a;
  } else if (a !== '' && b !== '' && operationFinish) {
    a *= -1;
    out.textContent = a;
  } else {
    b *= -1;
    out.textContent = b;
  }
}
