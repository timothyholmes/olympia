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
                rules: Joi.array().items(
                    Joi.object().keys({
                        label: Joi.string().required(),
                        type: Joi.string().required()
                    })
                ).min(1)
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
