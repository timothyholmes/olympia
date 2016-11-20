'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/fifa/matchResults',
    config: {
        validate: {
            payload: {
                players: Joi.array().items(
                    Joi.object().keys({
                        name: Joi.string().required(),
                        goalsFor: Joi.number().required(),
                        goalsAgainst: Joi.number().required(),
                        team: Joi.string().optional(),
                        sober: Joi.boolean().optional()
                    })
                ).min(2).max(2)
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
