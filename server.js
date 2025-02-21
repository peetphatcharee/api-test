const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
    const query = req.query.data;
    if (query === "yes") {
        return res.json([{ data: "yes", status: "success" }]);
    } else {
        return res.json([{ data: "no", status: "failed" }]);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});