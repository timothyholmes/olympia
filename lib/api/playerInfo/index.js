'use strict';

const PostHouseRecord = require('./postHouseRecord'),
    GetHouseRecord = require('./getHouseRecord'),
    GetPlayer = require('./getPlayer'),
    PostNewPlayer = require('./postNewPlayer');

module.exports = [
    PostHouseRecord,
    GetHouseRecord,
    PostNewPlayer,
    GetPlayer
];
