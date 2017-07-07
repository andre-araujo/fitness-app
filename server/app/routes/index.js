
const bodyParser = require('body-parser');
const config = require('../../utils/config');

const jsonParser = bodyParser.json();

const getFoods = require('../controllers/getFoods');
const setFood = require('../controllers/setFood');
const removeFood = require('../controllers/removeFood');

function routes(app) {
    app.get(`${config.API_URL}/get-all-foods`, getFoods);
    app.post(`${config.API_URL}/add-food`, jsonParser, setFood);
    app.post(`${config.API_URL}/remove-food`, jsonParser, removeFood);
}

module.exports = routes;
