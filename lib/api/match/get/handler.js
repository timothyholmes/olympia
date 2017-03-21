'use strict';

const Data = require('../../../data/');

module.exports.getMatch = (matchId) => {

    return Data.cockroach.getData({id: matchId}, 'matches');
};
