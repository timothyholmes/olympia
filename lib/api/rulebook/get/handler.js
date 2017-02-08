'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.getRulebook = (rulebookId) => {

    return Data.Find.pullFromMongo({ _id: rulebookId }, 'rulebooks')
        .then((response) => {
            return response;
        });
};
