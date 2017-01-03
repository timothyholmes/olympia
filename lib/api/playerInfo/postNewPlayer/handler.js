'use strict';

const Data = require('../../../data/'),
    _ = require('lodash');

module.exports.recordRecord = (payload) => {
    let newPlayer = _.clone(payload);

    newPlayer._id = payload.id;

    delete newPlayer.id;

    return Data.Insert.insertToMongo(newPlayer, 'players')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
