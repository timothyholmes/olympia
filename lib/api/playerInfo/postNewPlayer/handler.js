'use strict';

const Data = require('../../../data/');

module.exports.recordRecord = (payload) => {
    payload._id = payload.id;
    payload.ssbKills = 0;
    payload.ssbFalls = 0;
    payload.ssbGames = 0;
    payload.ssbPositionPoints = 0;
    payload.fifaGoalsFor = 0;
    payload.fifaGoalsAgainst = 0;
    payload.fifaWins = 0;
    payload.fifaDraws = 0;
    payload.fifaLosses = 0;
    payload.soberGames = 0;
    payload.maggedGames = 0;
    payload.ssbDamageGiven = 0;
    payload.ssbDamageTaken = 0;

    delete payload.id;

    return Data.Insert.insertToMongo(payload, 'players')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
