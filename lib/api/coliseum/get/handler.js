'use strict';

const Data = require('../../../data/');

module.exports.getColiseum = (coliseumId) => {

    return Data.cockroach.getColiseum(coliseumId);
};
