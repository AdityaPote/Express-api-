const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.route("/api/addNode").post(require("./controllers/AddNode"));
app.route("/api/bfs").post(require("./controllers/BFS"));

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${process.env.PORT}`.yellow.underline);
});
