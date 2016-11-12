'use strict';

const Data = require('../../../data/');

module.exports.recordRecord = (payload) => {
    return Data.Insert.insertToMongo(payload, 'fifaHouseRecords')
        .then((response) => {
            return response;
        });
};