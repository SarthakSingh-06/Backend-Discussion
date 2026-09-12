import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    return res
        .status(200)
        .send("Hello to Express");
});

app.get("/about", (req, res) => {
    return res
        .status(200)
        .send("About Node.js native HTTP");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
