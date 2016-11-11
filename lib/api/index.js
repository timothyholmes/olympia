'use strict';

const PostMatchResults = require('./postMatchResults'),
    PostHouseRecord = require('./postHouseRecord'),
    GetMatchResults = require('./getMatchResults'),
    GetHouseRecord = require('./getHouseRecord');

module.exports.routes = [
    PostMatchResults,
    PostHouseRecord,
    GetMatchResults,
    GetHouseRecord
];
