'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.recordMatch = (payload, version) => {
    let collectionName = 'ssbMatchResults' + version;

    payload.matchDate = new Date();

    return Data.Insert.insertToMongo(payload, collectionName)
        .then((response) => {
            Bluebird.map(payload.players, (player) => {
                let findOptions = {
                    name: player.name
                };

                return Data.Find.pullFromMongo(findOptions, 'players')
                .then((response) => {
                    let currentStats = _.clone(response.result[0]),
                        newStats = {};

                    if (player.character === 'Random') {
                        newStats.ssbRandomGames = currentStats.ssbRandomGames + 1;
                    }

                    newStats.ssbKills = currentStats.ssbKills + player.kills;
                    newStats.ssbFalls = currentStats.ssbFalls + player.falls;
                    newStats.ssbDamageGiven = currentStats.ssbDamageGiven + player.damageGiven;
                    newStats.ssbDamageTaken = currentStats.ssbDamageTaken + player.damageTaken;
                    newStats.ssbGames = currentStats.ssbGames + 1;
                    newStats.ssbPositionPoints = currentStats.ssbPositionPoints + player.position;

                    if (player.sober) {
                        newStats.soberGames = currentStats.soberGames + 1;
                    } else {
                        newStats.maggedGames = currentStats.maggedGames + 1;
                    }

                    return Data.Update.updateRecord(findOptions, newStats, 'players');
                })
                .then((response) =>{
                    return response;
                })
                .catch((error) => {
                    return error;
                });
            });
        });
};
