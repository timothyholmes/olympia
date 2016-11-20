'use strict';

const Data = require('../../../data/');

module.exports.recordMatch = (payload, version) => {
    let collectionName = 'ssbMatchResults' + version;

    return Data.Insert.insertToMongo(payload, collectionName)
        .then((response) => {
            return response;
        });
};
