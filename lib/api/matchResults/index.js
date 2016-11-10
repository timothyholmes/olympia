'use strict';

const service = require('./service'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/matchResults',
    config: {
        validate: {
            payload: {
                winner: Joi.object().keys({
                    name: Joi.string().required(),
                    score: Joi.number().required()
                }),
                loser: Joi.object().keys({
                    name: Joi.string().required(),
                    score: Joi.number().required()
                })
            }
        }
    },
    handler: (request, reply) => {
        let payload = request.payload,
            response;

        service.recordMatch(payload)
            .then((response) => {
                reply(response);
            });
    }
};
