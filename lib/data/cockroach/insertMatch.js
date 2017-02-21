'use strict';

const Helpers = require('./helpers');

module.exports = (ids, blob) => {
    let query = 'INSERT INTO matches (id, fk_coliseum_id, fk_gametype_id, match_object) VALUES ($1, $2, $3, $4) RETURNING id',
        params = [
            Date.now(),
            ids.coliseum,
            ids.game,
            JSON.stringify(blob)
        ];

    return Helpers.insert(query, params);
};
