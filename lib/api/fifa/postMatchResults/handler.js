'use strict';

const Data = require('../../../data/');

module.exports.recordMatch = (payload) => {
    return Data.Insert.insertToMongo(payload, 'matchResults')
        .then((response) => {
            return response;
        });
};
