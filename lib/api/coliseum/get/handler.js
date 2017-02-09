'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.getColiseum = (coliseumId) => {
    let options = coliseumId ? { _id: coliseumId } : {};

    return Data.Find.pullFromMongo(options, 'coliseums')
        .then((response) => {
            return response;
        });
};
