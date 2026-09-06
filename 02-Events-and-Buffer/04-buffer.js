const { Buffer } = require('node:buffer');

// const buf = Buffer.alloc(4); // allocate 4 Bytes of memory
// buf[0] = 12;
// console.log(buf);

const buf = Buffer.from('Hello Buffer Class', 'utf-8');
console.log(buf);
console.log(buf.toString());

const bufTwo = Buffer.alloc(10);
bufTwo.write("Hello");
console.log(bufTwo);
console.log(bufTwo.toString());

bufTwo[0] = 0x59; // Writing the buffer
bufTwo[5] = 0x77; // Writing the buffer
console.log(bufTwo.toString());

const concatBuffer = Buffer.concat([buf, bufTwo]);

console.log(concatBuffer);
console.log(concatBuffer.toString());