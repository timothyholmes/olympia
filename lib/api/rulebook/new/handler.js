'use strict';

const Data = require('../../../data/');

module.exports.newRulebook = (payload) => {

    return Data.cockroach.insertRulebook(payload.name, payload.rules);
};
