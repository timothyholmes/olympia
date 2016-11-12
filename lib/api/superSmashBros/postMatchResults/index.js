'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/ssb/{version}/matchResults',
    config: {
        validate: {
            params: {
                version: Joi.string().required().allow('og', 'melee', 'brawl')
            },
            payload: {
                duration: Joi.string().optional(),
                level: Joi.string().required(),
                players: Joi.array().items(
                    Joi.object().keys({
                        name: Joi.string().required(),
                        kills: Joi.number().required(),
                        character: Joi.string().required(),
                        damageGiven: Joi.number().optional(),
                        damageTaken: Joi.number().optional(),
                        victim: Joi.string().optional(),
                        bully: Joi.string().optional()
                    })
                ).min(2).max(4)
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
