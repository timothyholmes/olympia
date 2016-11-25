'use strict';

const Data = require('../../../data/');

module.exports.recordRecord = (payload) => {
    payload.ssbKills = 0;
    payload.ssbFalls = 0;
    payload.fifaGoalsFor = 0;
    payload.fifaGoalsAgainst = 0;
    payload.fifaWins = 0;
    payload.soberGames = 0;
    payload.maggedGames = 0;
    payload.ssbDamageGiven = 0;
    payload.ssbDamageTaken = 0;

    return Data.Insert.insertToMongo(payload, 'players')
        .then((response) => {
            return response;
        });
};
