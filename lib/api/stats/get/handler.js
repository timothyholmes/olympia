'use strict';

const Data = require('../../../data/');

module.exports.getStats = (statGroupId, type) => {

    return Data.cockroach.getData(statGroupId, type + '_stats');
};
