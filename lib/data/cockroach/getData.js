'use strict';

const Helpers = require('./helpers');

module.exports = (id, table) => {
    let query = 'SELECT * FROM ' + table;

    if (id) {
        query += ' WHERE id=$1';

        return Helpers.findSome(query, [id]);
    }

    return Helpers.findAll(query);
};
