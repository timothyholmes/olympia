'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.newGameRules = (payload) => {
    let params = _.clone(payload),
        gameRules = {};

    gameRules[params.name] = {};

    params.points.forEach((e) => {
        gameRules[params.name][e.label] = e.type;
    });

    return Data.Insert.insertToMongo(payload, 'gameRules')
        .then((response) => {
            return response;
        });
};
