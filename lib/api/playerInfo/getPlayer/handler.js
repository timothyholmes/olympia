'use strict';

const Data = require('../../../data/');

module.exports.getPlayers = (params) => {
    let options;

    options = (params.name) ? { name: params.name} : {};

    return Data.Find.pullFromMongo(options, 'players')
        .then((response) => {
            return response;
        });
};
