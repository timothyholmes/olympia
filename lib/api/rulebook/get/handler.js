'use strict';

const Data = require('../../../data/'),
    _ = require('lodash');

module.exports.getRulebook = (rulebookId) => {
    let query = 'SELECT * FROM rulebooks';

    if (rulebookId) {
        query += ' WHERE id=$1';

        return Data.cockroach.findSome(query, [rulebookId]);
    }

    return Data.cockroach.findAll(query);
};
