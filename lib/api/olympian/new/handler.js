'use strict';

const Data = require('../../../data/');

module.exports.newOlympian = (payload) => {
    let query = 'INSERT INTO olympians(id, name, description) values($1, $2, $3)  RETURNING id';

    return Data.cockroach.insert(query, [
        Date.now(),
        payload.name,
        payload.description
    ]);
};
