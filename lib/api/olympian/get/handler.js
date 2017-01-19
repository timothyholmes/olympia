'use strict';

const Data = require('../../../data/');

let internals = {};

module.exports.getPlayers = (params) => {
    let options;

    options = (params.name !== 'all') ? { name: params.name } : {};

    return Data.Find.pullFromMongo(options, 'players')
    .then((response) => {
        return response;
    });
};
