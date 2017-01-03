'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

let internals = {};

module.exports.recordMatch = (payload) => {
    let matchStatus,
        defaults,
        matchInfo = _.clone(payload);

    defaults = {
        collectionName: matchInfo.game + 'MatchResults',
        goalsFor: matchInfo.game + 'GoalsFor',
        goalsAgainst: matchInfo.game + 'GoalsAgainst',
        wins: matchInfo.game + 'Wins',
        losses: matchInfo.game + 'Losses',
        draws: matchInfo.game + 'Draws'
    };

    matchInfo.matchDate = new Date();

    return Data.Insert.insertToMongo(matchInfo, defaults.collectionName)
        .then((response) => {
            Bluebird.map(matchInfo.players, (player) => {
                let findOptions = {
                    name: player.name
                };

                player.matchStatus = internals.checkMatchStatus(player.goalsFor, player.goalsAgainst);

                return Data.Find.pullFromMongo(findOptions, 'players')
                .then((response) => {
                    let currentStats = _.clone(response.result[0]),
                        newStats = {};

                    newStats[defaults.goalsFor] = currentStats[defaults.goalsFor] + player.goalsFor;
                    newStats[defaults.goalsAgainst] = currentStats[defaults.goalsAgainst] + player.goalsAgainst;

                    if (player.matchStatus === 'win') {
                        newStats[defaults.wins] = currentStats[defaults.wins] + 1;
                    } else if (player.matchStatus === 'loss') {
                        newStats[defaults.losses] = currentStats[defaults.losses] + 1;
                    } else {
                        newStats[defaults.draws] = currentStats[defaults.draws] + 1;
                    }

                    if (player.sober) {
                        newStats.soberGames = currentStats.soberGames + 1;
                    } else {
                        newStats.maggedGames = currentStats.maggedGames + 1;
                    }

                    return Data.Update.updateRecord(findOptions, newStats,'players');
                })
                .then((response) =>{
                    return response;
                });
            });
        });
};

internals.checkMatchStatus = (goalsFor, goalsAgainst) => {
    if (goalsFor === goalsAgainst) {
        return 'draw';
    } else if (goalsFor > goalsAgainst) {
        return 'win';
    }

    return 'loss';
};
