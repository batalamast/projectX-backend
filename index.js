require("dotenv");
const express = require("express");
const app = express();

// require("./config");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));