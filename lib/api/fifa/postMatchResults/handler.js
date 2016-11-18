'use strict';

const Data = require('../../../data/');

let internals = {};

module.exports.recordMatch = (payload) => {
    let matchStatus;

    payload.players.forEach((player) => {
        player.matchStatus = internals.checkMatchStatus(player.goalsFor, player.goalsAgainst);
    });

    return Data.Insert.insertToMongo(payload, 'fifaMatchResults')
        .then((response) => {
            return response;
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
