'use strict';

const service = require('./service');
const Joi = require('joi');

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
    handler: function (request, reply) {
        var payload = request.payload,
            response;

        response = service.recordMatch(payload);

        reply({success: response});
    }
};
