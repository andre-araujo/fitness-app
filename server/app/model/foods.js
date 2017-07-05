
const low = require('lowdb');
const uuid = require('uuid');

const db = low('server/db/db.json');

if (!db.get('menu').value()) {
    db.set('menu', [])
        .write()
}

function createFood(data) {
    db.get('menu')
        .push({
            id: uuid(),
            data: data
        }).write();
}

function deleteFood(data) {
    db.get('menu')
        .remove({ id: data.id })
        .write()
}

function getAllFoods() {
    return db.get('menu')
}

module.exports = {
    createFood,
    deleteFood,
    getAllFoods
};
