import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "16kb" })); // allow parsing the incoming json response
app.use(express.urlencoded({ limit: "16kb" })); // allow parsing the incoming form data

app.get("/", (req, res) => {
    return res
        .status(200)
        .sendFile("index.html", { root: __dirname });
});

app.post("/handle-form", (req, res) => {
    console.log("REQ.QUERY:", req.query);
    console.log("REQ.BODY:", req.body);
    return res
        .status(201)
        .setHeader("Content-Type",  "text/html")
        .send("<h1>Form submitted</h1>");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
