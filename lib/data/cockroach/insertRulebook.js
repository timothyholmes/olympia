'use strict';

const Helpers = require('./helpers');

module.exports = (name, rules) => {
    let query,
        params = [
            Date.now(),
            name
        ];

    query = 'INSERT INTO rulebooks(id, name) values($1, $2) RETURNING id';

    if (rules) {

        query = 'INSERT INTO rulebooks(id, name, point_types) VALUES($1, $2, $3) RETURNING id';
        params[2] = rules.join(',');
    }

    return Helpers.insert(query, params);
};
