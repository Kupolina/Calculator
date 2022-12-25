import {
  a,
  setIsOperationFinished,
  setIsProcessFinished,
  setIsWaitNumFlag,
} from '../main';

import { out } from '../index';

import { doOperations } from './operations';

export function getResult() {
  doOperations();
  setIsWaitNumFlag(false);
  setIsProcessFinished(true);
  setIsOperationFinished(true);
  out.textContent = a;
}
