'use strict';

const Helpers = require('./helpers');

module.exports = (coliseumId) => {
    let query = 'SELECT * FROM coliseums';

    if (coliseumId) {
        query += ' WHERE id=$1';

        return Helpers.findSome(query, [coliseumId]);
    }

    return Helpers.findAll(query);
};
