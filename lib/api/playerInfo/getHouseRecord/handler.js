'use strict';

const Data = require('../../../data/');

module.exports.getMatches = (params) => {
    let options = {
        player: params.name
    };

    return Data.Find.pullFromMongo(options, 'houseRecords')
        .then((response) => {
            return response;
        });
};
