'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

let internals = {};

module.exports.recordMatch = (payload) => {
    let matchStatus,
        defaults,
        matchInfo = _.clone(payload),
        globalAdditions = {};

    globalAdditions[matchInfo.game] = {};

    matchInfo.date = new Date();

    return Data.Insert.insertToMongo(matchInfo, 'matchResults')
        .then((response) => {
            Bluebird.each(matchInfo.players, (player) => {
                let findOptions = {
                    name: player.name
                };

                return Data.Find.pullFromMongo(findOptions, 'players')
                .then((response) => {
                    let newStats = _.clone(response.result[0]) || {};

                    if (!newStats[matchInfo.game]) {
                        newStats[matchInfo.game] = {};
                    }

                    player.points.forEach((e) => {
                        newStats[matchInfo.game][e.label] = _.get(newStats, matchInfo.game + '.' + e.label, 0) + e.value;
                        globalAdditions[matchInfo.game][e.label] = _.get(globalAdditions, matchInfo.game + '.' + e.label, 0) + e.value;
                    });

                    newStats[matchInfo.game][player.placement] = _.get(newStats, matchInfo.game + '.' + player.placement, 0) + 1;

                    return Data.Update.updateRecord(findOptions, newStats, 'players');
                });
            });
        }).then((response) => {
            return Data.Find.pullFromMongo({}, 'globalStats');
        }).then((resp) => {
            let globalData = _.clone(resp.result[0]) || {};

            Object.keys(globalAdditions[matchInfo.game]).forEach((e) => {
                console.log(e);
            });

            return {};

            // return Data.Update.updateRecord(findOptions, newStats, 'players');
        });
};
