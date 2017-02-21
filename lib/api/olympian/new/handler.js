'use strict';

const Data = require('../../../data/');

module.exports.newOlympian = (payload) => {

    return Data.cockroach.insertNameAndDescription(payload.name, payload.description, 'olympians');
};
