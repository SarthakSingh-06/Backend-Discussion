const http = require("node:http");

const PORT = 8000;

const server = http.createServer((req, res) => {
    const url = req.url; // get the path or URL where request is made
    const method = req.method; // get the request method ( GET, POST, etc. )

    console.log("Request URL:", url); 
    console.log("Request METHOD:", method);

    switch (url) {
        case "/":
            res.writeHead(200); // send a status code
            res.end("Hello to Node.js");
            break;

        case "/about":
            res.writeHead(200); // send a status code
            res.end("About Node.js native HTTP");
            break;

        case "/create-post":
            res.writeHead(201); // send a status code
            res.end("Post about Node.js native HTTP created");
            break;

        case "/get-post":
            res.writeHead(200); // send a status code
            res.end("Post about Node.js native HTTP fetched");
            break;
    
        default:
            res.writeHead(404); // send a status code
            res.end("Page NOT found");
            break;
    };
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
