'use strict';

const Data = require('../../../data/');

let internals = {};

module.exports.getPlayers = (params) => {
    let options;

    options = (params.name) ? { name: params.name } : {};

    return Data.Find.pullFromMongo(options, 'players')
        .then((response) => {

            if (!response.result.length) {
                return {};
            }

            response.result.forEach((player) => {
                player.ssbScore = internals.ssbScore(
                    player.ssbKills,
                    player.ssbFalls,
                    player.ssbGames,
                    player.ssbPositionPoints,
                    player.ssbDamageTaken,
                    player.ssbDamageGiven,
                    player.ssbRandomGames
                ) || 0;
                player.fifaScore = internals.pointsScore(
                    player.fifaGoalsFor,
                    player.fifaGoalsAgainst,
                    player.fifaWins,
                    player.fifaDraws,
                    player.fifaLosses
                ) || 0;
                player.nhlScore = internals.pointsScore(
                    player.nhlGoalsFor,
                    player.nhlGoalsAgainst,
                    player.nhlWins,
                    player.nhlDraws,
                    player.nhlLosses
                ) || 0;
                player.fullScore = internals.fullScore(
                    player.maggedGames,
                    player.soberGames,
                    player.fifaScore,
                    player.nhlScore,
                    player.ssbScore
                ) || 0;
            });

            response.result.sort((a, b) => {
                if (a.fullScore > b.fullScore) {
                    return -1;
                } else if (a.fullScore < b.fullScore) {
                    return 1;
                }

                return 0;
            });

            return response;
        });
};

internals.pointsScore = (goalsFor, goalsAgainst, wins, draws, losses) => {
    let score,
        multiplier;

    score = ((3 * wins) + draws) / (wins + draws + losses);

    multiplier = (goalsFor / goalsAgainst);

    return score * multiplier;
};

internals.ssbScore = (kills, falls, games, points, damageTaken, damageGiven, randomCounter) => {
    let score,
        multiplier;

    if ((games - randomCounter) === 0) {
        games = games + 1;
    }

    score = points / games;

    multiplier = (kills / falls) * (damageGiven / damageTaken) * ((games / (games - randomCounter)) * 0.33);

    return score * multiplier;
};

internals.fullScore = (maggedGames, soberGames, fifaScore, nhlScore, ssbScore) => {
    if (soberGames === 0) {
        soberGames = 1;
    }

    return Math.ceil(((fifaScore + ssbScore + nhlScore) / 3 ) * (((maggedGames + soberGames) / soberGames) * 0.1) * 1000);
};
