'use strict';

const Data = require('../../../data/');

module.exports.getOlympians = (olympianId) => {
    let query = 'SELECT * FROM olympians';

    if (olympianId) {
        query += ' WHERE id=$1';

        return Data.cockroach.findSome(query, [olympianId]);
    }

    return Data.cockroach.findAll(query);
};
