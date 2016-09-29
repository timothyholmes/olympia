'use strict';

const Validate = require('./validate');
const Handler = require('./handler');

module.exports = {
    method: 'GET',
    path: '/matchResults',
    config: {
        validate: Validate
    },
    handler: Handler
};
