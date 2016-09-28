'use strict';

const Validate = require('./validate');
const Handler = require('./handler');

module.exports = {
    method: 'POST',
    path: '/matchResults',
    config: {
        validate: Validate
    },
    handler: function (reply, req) {

    }
};
