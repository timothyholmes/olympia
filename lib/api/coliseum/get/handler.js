'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.getColiseum = (coliseumId) => {

    return Data.Find.pullFromMongo({ _id: coliseumId }, 'coliseums')
        .then((response) => {
            return response;
        });
};
