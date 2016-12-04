'use strict';

const Data = require('../../../data/');

module.exports.getMatches = (params) => {
    let collectionName = 'ssbMatchResults' + params.version,
        options = {};

    if (params.name && params.name !== 'all') {
        options = {
            players: {
                $elemMatch: {
                    name: params.name
                }
            }
        };
    }

    return Data.Find.pullFromMongo(options, collectionName)
        .then((response) => {
            return response;
        });
};
