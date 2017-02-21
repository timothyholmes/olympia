'use strict';

const Helpers = require('./helpers');

module.exports = (ids, olympian) => {
    let query = 'INSERT INTO olympian_stats (fk_olympian_id, fk_coliseum_id, fk_gametype_id, stat_object) VALUES ($1, $2, $3, $4)',
        params = [olympian.id, ids.coliseum, ids.game],
        statObject = {};

    olympian.points.forEach((element) => {
        statObject[element.label] = element.value;
    });

    params[3] = JSON.stringify(statObject);

    return Helpers.insert(query, params)
        .then((resp) => {
            return statObject;
        });
};
