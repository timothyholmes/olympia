'use strict';

const Data = require('../../../data/');

let internals = {};

module.exports.getPlayers = (olympianId) => {
    let options = olympianId ? { _id: olympianId } : {};

    return Data.Find.pullFromMongo(options, 'olympians')
        .then((response) => {
            return response;
        });
};
