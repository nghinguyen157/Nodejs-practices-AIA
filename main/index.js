/**
 * P1
 */
let logString = 'Hello word';
console.log(logString)

/**
 * P2
 */

//Internal modules
import  { mul, add } from './modules/math.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const a = prompt("Input A:");
const b = prompt("Input B:");

let multipleRes = mul(a,b);
let addRes = add(a,b);

console.log(`Multiple result: ${multipleRes}`);
console.log(`Multiple result: ${addRes}`);
