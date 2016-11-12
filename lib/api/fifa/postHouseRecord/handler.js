'use strict';

const Data = require('../../../data/');

module.exports.recordRecord = (payload) => {
    return Data.Insert.insertToMongo(payload, 'houseRecords')
        .then((response) => {
            return response;
        });
};
