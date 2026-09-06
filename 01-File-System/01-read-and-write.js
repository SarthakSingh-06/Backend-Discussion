const fs = require("node:fs"); // commonjs syntax


// Sync - Blocking code
// Async - Non-blocking code

// read file sync
const fileContent = fs.readFileSync("./sample.txt", "utf-8");
console.log(fileContent);

// read file async
fs.readFile("./sample.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log("Reading file done");
    console.log(data);
});

// This will throw Error
// fs.readFile("./samples.txt", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     console.log("Reading file done");
//     console.log(data);
// });

fs.writeFileSync("./newCopy.txt", `${fileContent} - THE COPY`);

// TODO: Write a file async
