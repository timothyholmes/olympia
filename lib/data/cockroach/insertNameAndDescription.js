'use strict';

const Helpers = require('./helpers');

module.exports = (name, description, table) => {
    let query = 'INSERT INTO ' + table + '(id, name, description) VALUES($1, $2, $3)  RETURNING id';

    return Helpers.insert(query, [
        Date.now(),
        name,
        description
    ]);
};
