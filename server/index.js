
const express = require('express');
const config = require('./utils/config');
const routes = require('./app/routes');

const app = express();

routes(app);

app.listen(config.PORT);
