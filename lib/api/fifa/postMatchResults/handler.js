'use strict';

const Data = require('../../../data/');

module.exports.recordMatch = (payload) => {
    return Data.Insert.insertToMongo(payload, 'fifaMatchResults')
        .then((response) => {
            return response;
        });
};
