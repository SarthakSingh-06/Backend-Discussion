import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json({ limit: "16kb" })); // allow parsing the incoming json response
app.use(express.urlencoded({ limit: "8kb" })); // allow parsing the incoming form data
app.use(express.static("public")); // serve static files


// Add middlewares
app.use((req, res, next) => {
    console.log("Middleware - 1");
    res.send("Cycle terminated by Middleware - 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware - 2");
    next();
});

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Home Page</h1>");
});

// dyamic routes
app.get("/meeting/:meetId", (req, res) => {
    const meetId = req.params.meetId; // handle dynamic parameters
    const queries = req.query;

    return res
        .status(200)
        .json({
            meetId,
            isActive: true,
            queries,
        });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
