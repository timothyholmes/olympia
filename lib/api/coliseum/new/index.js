'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/coliseum/',
    config: {
        validate: {
            payload: {
                name: Joi.string().required(),
                description: Joi.string().optional()
            }
        }
    },
    handler: (request, reply) => {

        Handler.newColiseum(request.payload)
            .then((response) => {
                reply(response);
            });
    }
};
