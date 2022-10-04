//Internal modules
import  { mul, add } from 'math-module-nnguyen242-1';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const a = prompt("Input A:");
const b = prompt("Input B:");

let multipleRes = mul(a,b);
let addRes = add(a,b);

console.log(`Multiple result: ${multipleRes}`);
console.log(`Multiple result: ${addRes}`);
