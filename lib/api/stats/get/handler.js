'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird');

module.exports.getStats = (statGroupId, type) => {

    return Data.cockroach.getData({id: statGroupId}, type + '_stats')
        .then(resp => {

            return Bluebird.each(resp.result, entry => {
                entry.stat_object = JSON.parse(entry.stat_object);
            });
        });
};
