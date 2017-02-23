'use strict';

const Data = require('../../../data/');

module.exports.getRulebook = (rulebookId) => {

    return Data.cockroach.getData({id: rulebookId}, 'rulebooks');
};
