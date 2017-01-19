'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/coliseum/new',
    config: {
        validate: {
            payload: {
                name: Joi.string().required(),
                olympians: Joi.array().optional().default([]),
                games: Joi.array().optional()
            }
        }
    },
    handler: (request, reply) => {
        let payload = request.payload;

        Handler.newColiseum(payload)
            .then((response) => {
                reply(response);
            });
    }
};
