'use strict';

const Data = require('../../../data/');

let internals = {};

module.exports.getPlayers = (params) => {
    let options;

    options = (params.name) ? { name: params.name} : {};

    return Data.Find.pullFromMongo(options, 'players')
        .then((response) => {

            response.result.forEach((player) => {
                player.ssbScore = internals.ssbScore(
                    player.ssbKills,
                    player.ssbFalls,
                    player.ssbGames,
                    player.ssbPositionPoints,
                    player.ssbDamageTaken,
                    player.ssbDamageGiven
                );
                player.fifaScore = internals.fifaScore(
                    player.fifaGoalsFor,
                    player.fifaGoalsAgainst,
                    player.fifaWins,
                    player.fifaDraws,
                    player.fifaLosses
                );
                player.fullScore = internals.fullScore(
                    player.maggedGames,
                    player.soberGames,
                    player.fifaScore,
                    player.ssbScore
                );
            });

            response.result.sort((a, b) => {
                if (a.ssbScore > b.ssbScore) {
                    return -1;
                } else if (a.ssbScore < b.ssbScore) {
                    return 1;
                }

                return 0;
            });

            return response;
        });
};

internals.fifaScore = (goalsFor, goalsAgainst, wins, draws, losses) => {
    let score,
        multiplier;

    score = ((3 * wins) + draws) / (wins + draws + losses);

    multiplier = (goalsFor / goalsAgainst);

    return score * multiplier;
};

internals.ssbScore = (kills, falls, games, points, damageTaken, damageGiven) => {
    let score,
        multiplier;

    score = points / games;

    multiplier = (kills / falls) * (damageGiven / damageTaken);

    return score * multiplier;
};

internals.fullScore = (maggedGames, soberGames, fifaScore, ssbScore) => {
    return ((fifaScore + ssbScore) / 2 ) * ((maggedGames + soberGames) / soberGames);
};
