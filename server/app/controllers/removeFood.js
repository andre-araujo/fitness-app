const foodModel = require('../model/foods');

function removeFood(req, res) {
    if (!req.body) {
        res.send('error');
        return;
    }

    foodModel.removeFood(req.body);

    res.send({
        status: 'ok'
    });
}

module.exports = removeFood;
