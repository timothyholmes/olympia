'use strict';

const Data = require('../../../data/'),
    _ = require('lodash');

module.exports.getMatches = (params) => {
    let options = {},
        filters = _.clone(params);

    options = {
        game: filters.game
    };

    return Data.Find.pullFromMongo(options, 'matchResults')
        .then((response) => {
            return response;
        });
};
