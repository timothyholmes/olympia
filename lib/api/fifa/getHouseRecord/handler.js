'use strict';

const Data = require('../../../data/');

module.exports.getMatches = (params) => {
    let options = {
        player: params.name
    };

    return Data.Find.pullFromMongo('houseRecords', options)
        .then((response) => {
            return response;
        });
};
