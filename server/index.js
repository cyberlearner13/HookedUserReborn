const express = require("express");
const bodyParser = require("body-parser");
require('./db/mongoose');
const userRouter = require("./routes/user")

const app = express();

app.use(bodyParser.json());
app.use(userRouter);

app.listen(4000, () => {
    console.log('Server Started in PORT 4000');
})