
const fetchNutritionixAPI = require('../../utils/fetchNutritionixAPI');
const foodModel = require('../model/foods');

function setFood(req, res) {
    if (!req.body) {
        res.send('error');
        return;
    }

    fetchNutritionixAPI(
        req.body.title,
        (err, httpResponse, body) => {
            const parsedBody = JSON.parse(body);
            if (
                err ||
                !parsedBody ||
                !parsedBody.hits
            ) {
                res.send('error');
            }

            try {
                const moreHealthFood = parsedBody.hits[0].fields;

                foodModel.setFood({
                    title: moreHealthFood.item_name,
                    info: {
                        cholesterol: moreHealthFood.nf_cholesterol,
                        calories: moreHealthFood.nf_calories,
                        sodium: moreHealthFood.nf_sodium
                    }
                })

                res.send({
                    status: 'ok'
                });

            } catch (e) {
                res.send('error');
            }
        }
    );

    
}

module.exports = setFood;
