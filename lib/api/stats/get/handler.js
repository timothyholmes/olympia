'use strict';

const Data = require('../../../data/');

module.exports.getStats = (statGroupId, type) => {

    return Data.cockroach.getData({id: statGroupId}, type + '_stats');
};
