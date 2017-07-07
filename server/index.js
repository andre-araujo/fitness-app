
const path = require('path');
const express = require('express');
const config = require('./utils/config');
const routes = require('./app/routes');

const app = express();

if (config.IS_PRODUCTION) {
    app.use(express.static(path.join(__dirname, '/../build')));
}

routes(app);

app.listen(config.PORT);
