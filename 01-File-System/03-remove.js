const fs = require("fs");

// create a directory
fs.mkdirSync("./newFolder/anotherNewFolder", { recursive: true });

// remove a directory
fs.rmdirSync("./newFolder/anotherNewFolder");

fs.unlinkSync("./newFolder/text.txt");
