'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

module.exports.recordMatch = (params, payload) => {

    // Find the coliseum

    return Data.Find.pullFromMongo({ _id: params.coliseum }, 'coliseums')
        .then((response) => {

            return response;
        });

    // Find the game within the coliseum
    //
    // Merge the new stats with the existing, for olympians and global
    //
    // Find the olympian
    //
    // Merge the olympian's stats during this game with their global stats

};
