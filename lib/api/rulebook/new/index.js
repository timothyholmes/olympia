'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/rulebook/',
    config: {
        validate: {
            payload: {
                name: Joi.string().required(),
                rules: Joi.array().optional()
            }
        }
    },
    handler: (request, reply) => {
        let payload = request.payload;

        Handler.newRulebook(payload)
            .then((response) => {
                reply(response);
            });
    }
};
