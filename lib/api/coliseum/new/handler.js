'use strict';

const Data = require('../../../data/');

module.exports.newColiseum = (payload) => {

    return Data.cockroach.insertNameAndDescription(payload.name, payload.description, 'coliseums');
};
