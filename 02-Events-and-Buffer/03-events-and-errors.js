const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('error', (err) => {
    console.error(`Error Occured: ${err}`);
});

myEmitter.emit("error", new Error("Custom error"));
myEmitter.emit("error", new ReferenceError("Custom reference error"));
