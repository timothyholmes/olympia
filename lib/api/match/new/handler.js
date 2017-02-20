'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    GetColiseum = require('../../coliseum/get/handler').getColiseum,
    Bluebird = require('bluebird');

module.exports.recordMatch = (payload) => {

    return GetColiseum(payload.coliseum)
        .then(() => {

        });

    // Find the coliseum

    // Handle game having no stats

    // Find the game within the coliseum

    // Find the olympian

    // Merge the olympian's stats during this game with their global stats
};
