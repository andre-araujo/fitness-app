
const GoogleImages = require('google-images');
const env = require('node-env-file');

const fetchNutritionixAPI = require('../../utils/fetchNutritionixAPI');
const foodModel = require('../model/foods');

env('.env');

const googleImages = new GoogleImages(
    process.env.GOOGLE_SEARCH_CSE,
    process.env.GOOGLE_SEARCH_API_KEY
);

function setFood(req, res) {
    if (!req.body) {
        res.send({ status: 'error' });
        return;
    }

    fetchNutritionixAPI(
        process.env.NUTRITIONIX_API_KEY,
        req.body.title,
        (err, httpResponse, body) => {
            const parsedBody = JSON.parse(body);
            if (
                err ||
                !parsedBody ||
                !parsedBody.hits
            ) {
                res.send({ status: 'error' });
            }

            try {
                const moreHealthFood = parsedBody.hits[0].fields;

                googleImages.search(moreHealthFood.item_name)
                    .then((images) => {
                        foodModel.setFood({
                            title: moreHealthFood.item_name.split(',')[0],
                            image: images[1].url,
                            info: {
                                cholesterol: moreHealthFood
                                    .nf_cholesterol.toString(),
                                calories: moreHealthFood
                                    .nf_calories.toString(),
                                sodium: moreHealthFood
                                    .nf_sodium.toString()
                            }
                        })

                        res.send({
                            status: 'ok'
                        });

                    }).catch(() => {
                        res.send({ status: 'error' });
                    });

            } catch (e) {
                res.send({ status: 'error' });
            }
        }
    );
}

module.exports = setFood;
