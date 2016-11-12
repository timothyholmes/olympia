'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/fifa/matchResults',
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
        let payload = request.payload;

        Handler.recordMatch(payload)
            .then((response) => {
                reply(response);
            });
    }
};
