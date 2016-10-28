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
        var payload = request.payload,
            response;

        response = service.recordMatch(payload);

        reply(response);
    }
};
