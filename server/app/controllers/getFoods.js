const foodModel = require('../model/foods');

function getFoods(req, res) {
    const allFoods = foodModel.getAllFoods();

    res.send({
        status: 'ok',
        data: allFoods
    });
}

module.exports = getFoods;
