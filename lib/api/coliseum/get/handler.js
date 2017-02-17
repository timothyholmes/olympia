'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

module.exports.getColiseum = (coliseumId) => {
    let query = 'SELECT * FROM coliseums';

    return Data.cockroach.find(query);
};
