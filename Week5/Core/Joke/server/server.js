const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/joke.routes") (app)

app.listen(port, () => console.log(`Express running on port ${port}`));