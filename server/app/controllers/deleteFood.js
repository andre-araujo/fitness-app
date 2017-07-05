const foodModel = require('../model/foods');

function deleteFood(req, res) {
    if (!req.body) {
        res.send('error');
        return;
    }

    foodModel.deleteFood(req.body);

    res.send({
        status: 'ok'
    });
}

module.exports = deleteFood;
