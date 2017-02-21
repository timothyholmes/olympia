'use strict';

const Helpers = require('./helpers');

module.exports = (ids, type) => {
    let query,
        params;

    if (type === 'olympian') {

        query = 'SELECT stat_object FROM olympian_stats WHERE fk_coliseum_id=$1 AND fk_gametype_id=$2 AND fk_olympian_id=$3';
        params = [ids.coliseum, ids.game, ids.olympian];
    } else {

        query = 'SELECT stat_object FROM coliseum_stats WHERE fk_coliseum_id=$1 AND fk_gametype_id=$2';
        params = [ids.coliseum, ids.game];
    }

    return Helpers.findSome(query, params)
        .then((resp) => {

            return JSON.stringify(resp[0]);
        });
};
