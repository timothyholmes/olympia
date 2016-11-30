'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.recordMatch = (payload, version) => {
    let collectionName = 'ssbMatchResults' + version;

    return Data.Insert.insertToMongo(payload, collectionName)
        .then((response) => {
            Bluebird.map(payload.players, (player) => {
                let findOptions = {
                    name: player.name
                };

                return Data.Find.pullFromMongo(findOptions, 'players')
                .then((response) => {
                    let newStats = _.clone(response.result[0]);

                    newStats.ssbKills = newStats.ssbKills + player.kills;
                    newStats.ssbFalls = newStats.ssbFalls + player.falls;
                    newStats.ssbDamageGiven = newStats.ssbDamageGiven + player.damageGiven;
                    newStats.ssbDamageTaken = newStats.ssbDamageTaken + player.damageTaken;
                    newStats.ssbGames += 1;

                    if (player.sober) {
                        newStats.soberGames += 1;
                    } else {
                        newStats.maggedGames += 1;
                    }

                    return Data.Update.updateRecord(findOptions, newStats,'players');
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
