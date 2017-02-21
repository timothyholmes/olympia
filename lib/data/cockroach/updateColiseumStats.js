'use strict';

const Helpers = require('./helpers');

module.exports = (ids, coliseumStats) => {
    let query = 'INSERT INTO coliseum_stats (fk_coliseum_id, fk_gametype_id, stat_object) VALUES ($1, $2, $3)',
        params = [ids.coliseum, ids.game],
        statObject = {};



    params[2] = JSON.stringify(statObject);

    return Helpers.insert(query, params);
};
