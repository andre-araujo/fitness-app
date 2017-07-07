const request = require('request');

function fetchNutritionix(name, callback) {
    const nutritionixPostBody = {
        appId: '12cac74c',
        appKey: '5d9a664cae05ea728f2903215c92ceaf',
        fields:[
            'item_name',
            'brand_name',
            'nf_cholesterol',
            'nf_calories',
            'nf_vitamin',
            'nf_sodium',
            'item_type'
        ],
        queries:{
            item_name: name
        }
    }

    request.post(
        {
            url: 'https://api.nutritionix.com/v1_1/search',
            headers: {
                'User-Agent': 'request',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(nutritionixPostBody)
        },
        callback
    );
}

module.exports = fetchNutritionix;
