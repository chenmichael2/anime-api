const express = require('express');
const { Season } = require('./models');
const app = express();

app.use(express.json());
app.get("/seasons", async (req, res) => {
    try {
        const seasonArray = await Season.find({});
        res.json({ seasonArray });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});