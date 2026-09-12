import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json({ limit: "8kb" })); // allow parsing the incoming json respnse
app.use(express.urlencoded({ limit: "8kb" })); // allow parsing the incoming json respnse

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
