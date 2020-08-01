const express = require('express');
const bodyParser = require('body-parser');
require('./db/mongoose');
require('./models/user');
const userRouter = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(userRouter);

const port = process.env.API_PORT;

app.listen(port, () => {
  console.log(`Server Started in PORT ${port}`);
});
