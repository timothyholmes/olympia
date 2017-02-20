'use strict';

const Data = require('../../../data/'),
    _ = require('lodash');

module.exports.getColiseum = (coliseumId) => {
    let query = 'SELECT * FROM coliseums';

    if (coliseumId) {
        query += ' WHERE id=$1';

        return Data.cockroach.findSome(query, [coliseumId]);
    }

    return Data.cockroach.findAll(query);
};
