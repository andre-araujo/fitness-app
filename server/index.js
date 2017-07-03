const express = require('express');
const app = express();

const config = require('./utils/config');
const routes = require('./routes')(app);

app.listen(config.PORT);