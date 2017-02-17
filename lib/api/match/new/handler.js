'use strict';

const Data = require('../../../data/'),
    _ = require('lodash'),
    Bluebird = require('bluebird');

module.exports.recordMatch = (payload) => {

    // Find the coliseum
    return Data.mongo.find({}, 'coliseums')
        .then((resp) => {
            let response = resp.response[0];

            console.log('coliseum', response);

            // Handle game having no stats
            if (!_.get(response, 'stats.length')) {

                console.log('in here');
            }

            // Find the game within the coliseum
            return Bluebird.each(response.stats, (statGroup) => {
                if (statGroup._id === payload.game) {

                    return statGroup;
                }
            });
        });

    // Find the olympian
    //
    // Merge the olympian's stats during this game with their global stats
};
