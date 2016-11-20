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
                duration: Joi.string().optional().allow(''),
                level: Joi.string().required(),
                players: Joi.array().items(
                    Joi.object().keys({
                        name: Joi.string().required(),
                        kills: Joi.number().required(),
                        falls: Joi.number().required(),
                        sds: Joi.number().required(),
                        character: Joi.string().required(),
                        damageGiven: Joi.number().optional().default(-1),
                        damageTaken: Joi.number().optional().default(-1),
                        victim: Joi.string().optional().default(''),
                        bully: Joi.string().optional().default(''),
                        sober: Joi.boolean().optional().default('')
                    })
                ).min(2).max(4)
            }
        }
    },
    handler: (request, reply) => {
        let payload = request.payload,
            version = request.params.version;

        Handler.recordMatch(payload, version)
            .then((response) => {
                reply(response);
            });
    }
};
