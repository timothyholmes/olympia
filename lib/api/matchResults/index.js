'use strict';

const Validate = require('./validate');
const Handler = require('./handler');

module.exports = {
    method: 'POST',
    path: '/tasks',
    config: {
        validate: Validate.validate
    },
    handler: Handler.handler
};
