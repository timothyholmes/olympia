'use strict';

const Validate = require('./validate');

module.exports = {
    method: 'GET',
    path: '/{id}',
    config: {
        validate: Validate
    },
    handler: function (request, reply) {
        reply({
            greeting: 'Your ID is: ' + encodeURIComponent(request.params.id) + '!'
        });
    }
};
