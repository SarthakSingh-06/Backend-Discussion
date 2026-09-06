const Events = require("events");

const myEvents = new Events();

function greetUser(fname, lname) {
    console.log(` Welcome ${fname} ${lname} to Node.js Events`);
};

// register an event
myEvents.on("greet", greetUser);

// another event listener
myEvents.on("greet", (fname, lname) => {
    console.log(`2 -- Welcome ${fname} ${lname} to Node.js Events`);
});

// register an event - to execute only once
myEvents.once("check", () => {
    console.log(`Checking the user...`);
});

// emit an event
myEvents.emit("greet", "Sarthak", "Singh");
myEvents.emit("check");

// remove event listener
myEvents.removeListener("gret", greetUser);
myEvents.removeAllListeners("greet");

console.log("AFTER RWMOVING\n");
myEvents.emit("greet", "Sarthak", "Singh");
