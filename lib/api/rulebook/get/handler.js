'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.getRulebook = (rulebookId) => {
    let options = rulebookId ? { _id: rulebookId } : {};

    return Data.mongo.find(options, 'rulebooks')
        .then((response) => {
            return response;
        });
};
