'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

let internals = {};

module.exports.recordMatch = (payload) => {
    let matchStatus;

    return Data.Insert.insertToMongo(payload, 'fifaMatchResults')
        .then((response) => {
            Bluebird.map(payload.players, (player) => {
                let findOptions = {
                    name: player.name
                };

                player.matchStatus = internals.checkMatchStatus(player.goalsFor, player.goalsAgainst);

                return Data.Find.pullFromMongo(findOptions, 'players')
                .then((response) => {
                    let newStats = _.clone(response.result[0]);

                    newStats.fifaGoalsFor = newStats.fifaGoalsFor + player.goalsFor;
                    newStats.fifaGoalsAgainst = newStats.fifaGoalsAgainst + player.goalsAgainst;

                    if (player.matchStatus === 'win') {
                        newStats.fifaWins += 1;
                    } else if (player.matchStatus === 'loss') {
                        newStats.fifaLosses += 1;
                    } else {
                        newStats.fifaDraws += 1;
                    }

                    if (player.sober) {
                        newStats.soberGames += 1;
                    } else {
                        newStats.maggedGames += 1;
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
