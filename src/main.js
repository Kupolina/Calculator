import { out } from '.';

export let a = ''; // first number
export let b = ''; // second number
export let sign = ''; // sign variable
export let processfinish = false; // process flag
export let waitNumFlag = false; // number input completed flag
export let operationFinish = false; // operation flag

export const setNewVariables = (
  newFirstNumber,
  newSecondNumber,
  newArithmeticSign,
  isProcessFinished,
  isWaitNumFlag,
  isOperationFinish,
) => {
  if (newFirstNumber !== undefined) a = newFirstNumber;
  if (newSecondNumber !== undefined) b = newSecondNumber;
  if (newArithmeticSign !== undefined) sign = newArithmeticSign;
  if (isProcessFinished !== undefined) processfinish = isProcessFinished;
  if (isWaitNumFlag !== undefined) waitNumFlag = isWaitNumFlag;
  if (isOperationFinish !== undefined) operationFinish = isOperationFinish;
};

export const setNewFirstNumber = (newFirstNumber) => {
  a = newFirstNumber;
};

export const setNewSecondNumber = (newSecondNumber) => {
  b = newSecondNumber;
};

export const setIsOperationFinished = (isOperationFinish) => {
  if (isOperationFinish) {
    out.textContent = '';
  }
  operationFinish = isOperationFinish;
};

export const setIsProcessFinished = (isProcessFinished) => {
  processfinish = isProcessFinished;
};

export const setNewArithmeticSign = (newArithmeticSign) => {
  sign = newArithmeticSign;
};

export const setIsWaitNumFlag = (isWaitNumFlag) => {
  waitNumFlag = isWaitNumFlag;
};

