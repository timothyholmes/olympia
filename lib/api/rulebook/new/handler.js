'use strict';

const Data = require('../../../data/');

module.exports.newRulebook = (payload) => {
    let query,
        params = [
            Date.now(),
            payload.name
        ];

    query = 'INSERT INTO rulebooks(id, name) values($1, $2)  RETURNING id';

    if (payload.rules) {

        query = 'INSERT INTO rulebooks(id, name, point_types) values($1, $2, $3)  RETURNING id';
        params[2] = payload.rules.join(',');
    }

    return Data.cockroach.insert(query, params);
};
