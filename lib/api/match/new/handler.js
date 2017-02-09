'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

module.exports.recordMatch = (params, payload) => {

    // Find the coliseum
    return Data.Find.pullFromMongo({ _id: params.coliseum }, 'coliseums')
        .then((resp) => {
            let response = resp[0];

            // Handle game having no stats
            if (!response.stats.length) {

            }

            // Find the game within the coliseum
            return Bluebird.each(response.stats, (statGroup) => {
                if (statGroup._id === params.game) {

                    return statGroup;
                }
            });
        });

    // Find the olympian
    //
    // Merge the olympian's stats during this game with their global stats
};
