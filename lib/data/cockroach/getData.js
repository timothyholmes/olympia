'use strict';

const Helpers = require('./helpers');

module.exports = (ids, table) => {
    let query = 'SELECT * FROM ' + table,
        inc = 1,
        idArray = [];

    if (ids === {}) {
        query += ' WHERE ';

        Object.keys(ids).forEach((key) => {
            query += key + '=$' + inc + ' ';
            idArray.push(ids[key]);
        });

        return Helpers.findSome(query, idArray);
    }

    return Helpers.findAll(query);
};
