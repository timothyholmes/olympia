'use strict';

const Helpers = require('./helpers');

module.exports = (olympianId) => {
    let query = 'SELECT * FROM olympians';

    if (olympianId) {
        query += ' WHERE id=$1';

        return Helpers.findSome(query, [olympianId]);
    }

    return Helpers.findAll(query);
};
