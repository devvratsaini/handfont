const { PORT } = require("../config");
const cors = require("cors");
const express = require("express");
const routesRouter = require("./router");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
