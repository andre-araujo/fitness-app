const foodModel = require('../model/foods');

function setFood(req, res) {
    if (!req.body) {
        res.send('error');
        return;
    }

    foodModel.createFood(req.body);

    res.send({
        status: 'ok'
    });
}

module.exports = setFood;
