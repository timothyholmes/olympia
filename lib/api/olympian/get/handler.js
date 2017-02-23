'use strict';

const Data = require('../../../data/');

module.exports.getOlympians = (olympianId) => {

    return Data.cockroach.getData({id: olympianId}, 'olympians');
};
