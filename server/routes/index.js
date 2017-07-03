const config = require('../utils/config');
const main = require('../controllers/main');
const api = require('../controllers/api');

function routes(app) {
    app.get('/', main);
    app.get(config.API_URL, api)
}
module.exports = routes;
