const config = require('../utils/config');
const main = require('../controllers/main');
const api = require('../controllers/api');

module.exports = function(app) {
    app.get('/', main);
    app.get(config.API_URL, api)
}
