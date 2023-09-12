// import { pigIt } from './daily-code-challenges/9-7-23';
// import { reverseSeq } from './daily-code-challenges/9-8-23';
// import { pipeFix } from './daily-code-challenges/9-9-23';
// import { evenOrOdd } from './daily-code-challenges/9-11-23';
import { makeLooper } from './daily-code-challenges/9-12-23';

// const val = pigIt('Hello world !');

// const val = reverseSeq(5);
// const val = pipeFix([-1, 4]);
const looper = makeLooper('asdas');

const looper2 = makeLooper('as');
const val = looper();

const val2 = looper();

const val4 = looper2();

const val3 = looper();

const val5 = looper2();
const val6 = looper2();

// eslint-disable-next-line no-console
console.log(val, val2, val3);

console.log(val4, val5, val6);
