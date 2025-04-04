const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const tasks = require("./routes/task");
app.use(tasks);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
