'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

function combineObjectsWithNumericalValues (first, second) {
    let combinedObject = {};

    // Avoid the n^2; make this check catch when there're no duplicate keys
    if (first === {} || second === {}) {
        return _.merge(first, second);
    }

    Object.keys(first).forEach((mainKey) => {
        Object.keys(second).forEach((comparisonKey) => {
            if (mainKey === comparisonKey) {
                combinedObject[mainKey] = first[mainKey] + second[mainKey];
            }
        });
    });

    return combinedObject;
}

module.exports.recordMatch = (payload) => {
    let coliseumStats = {},
        ids = {
            coliseum: payload.coliseum,
            game: payload.game
        };

    return Data.cockroach.insertMatch(ids, payload)
        .then((resp) => {
            return Bluebird.each(payload.olympians, (olympian) => {
                ids.olympian = olympian.id;

                return Data.cockroach.getStatData(ids)
                    .then((resp) => {
                        return Data.cockroach.updateOlympianStats(ids, olympian)
                            .then((resp) => {

                                // track the coliseum stats
                                coliseumStats = combineObjectsWithNumericalValues(coliseumStats, resp.points);
                            });
                    });
            }).then(() => {

                return Data.cockroach.updateColiseumStats(ids, coliseumStats);
            });
        });
};
