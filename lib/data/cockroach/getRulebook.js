'use strict';

const Helpers = require('./helpers');

module.exports = (rulebookId) => {
    let query = 'SELECT * FROM rulebooks';

    if (rulebookId) {
        query += ' WHERE id=$1';

        return Helpers.findSome(query, [rulebookId]);
    }

    return Helpers.findAll(query);
};
