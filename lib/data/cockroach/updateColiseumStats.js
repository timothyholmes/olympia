'use strict';

const Helpers = require('./helpers');

module.exports = (ids, coliseumStats, currentStats) => {
    let query,
        params = [ids.coliseum, ids.game],
        statObject = coliseumStats;

    if (!currentStats) {

        query = 'INSERT INTO coliseum_stats (fk_coliseum_id, fk_gametype_id, stat_object, match_count) VALUES ($1, $2, $3, 2)';
    } else {

        statObject = Helpers.combineObjectsWithNumericalValues(statObject, JSON.parse(currentStats.stat_object));

        query = 'UPDATE coliseum_stats SET stat_object=$3, match_count=$4 WHERE fk_coliseum_id=$1 AND fk_gametype_id=$2';

        // +2 because two matches were played for the coliseum- on for each player
        params[3] = parseInt(currentStats.match_count) + 2;
    }

    params[2] = JSON.stringify(statObject);

    return Helpers.update(query, params)
        .then((resp) => {

            return statObject;
        });
};
