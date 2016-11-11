'use strict';

const PostMatchResults = require('./postMatchResults'),
    PostHouseRecord = require('./postHouseRecord'),
    GetMatchResults = require('./getMatchResults');

module.exports.routes = [
    PostMatchResults,
    PostHouseRecord,
    GetMatchResults
];
