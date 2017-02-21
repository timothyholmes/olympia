'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

module.exports.recordMatch = (payload) => {
    let coliseumStats = {},
        ids = {
            coliseum: payload.coliseum,
            game: payload.game
        },
        responseObject = {};

    return Data.cockroach.insertMatch(ids, payload)
        .then((resp) => {

            responseObject.matchId = resp.result.id;

            return Bluebird.each(payload.olympians, (olympian) => {

                ids.olympian = olympian.id;

                return Data.cockroach.getStatData(ids, 'olympian')
                    .then((resp) => {

                        return Data.cockroach.updateOlympianStats(ids, olympian, resp.result[0])
                            .then((resp) => {

                                coliseumStats = Data.cockroach.helpers.combineObjectsWithNumericalValues(coliseumStats, resp.points);
                            });
                    });
            }).then(() => {

                return coliseumStats;

                return Data.cockroach.updateColiseumStats(ids, coliseumStats);
            });
        });
};
