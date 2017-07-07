
const low = require('lowdb');
const uuid = require('uuid');

const db = low('server/db/db.json');

if (!db.get('menu').value()) {
    db.set('menu', [])
        .write();
}

function setFood(data) {
    db.get('menu')
        .push(Object.assign(data, {
            id: uuid()
        })).write();
}

function removeFood(id) {
    db.get('menu')
        .remove(id)
        .write();
}

function getAllFoods() {
    return db.get('menu');
}

module.exports = {
    setFood,
    removeFood,
    getAllFoods
};
