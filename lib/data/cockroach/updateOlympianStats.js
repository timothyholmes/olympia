'use strict';

const Helpers = require('./helpers');

module.exports = (ids, olympian, currentStats) => {
    let query,
        params = [olympian.id, ids.coliseum, ids.game],
        statObject = {},
        statReturn;

    olympian.points.forEach((element) => {
        statObject[element.label] = element.value;
    });

    statReturn = statObject;

    if (!currentStats) {

        query = 'INSERT INTO olympian_stats (fk_olympian_id, fk_coliseum_id, fk_gametype_id, stat_object, match_count) VALUES ($1, $2, $3, $4, 1)';
    } else {

        statObject = Helpers.combineObjectsWithNumericalValues(statObject, JSON.parse(currentStats.stat_object));

        query = 'UPDATE olympian_stats SET stat_object=$4, match_count=$5 WHERE fk_olympian_id=$1 AND fk_coliseum_id=$2 AND fk_gametype_id=$3';

        params[4] = parseInt(currentStats.match_count) + 1;
    }

    params[3] = JSON.stringify(statObject);

    return Helpers.update(query, params)
        .then((resp) => {

            return statReturn;
        });
};
