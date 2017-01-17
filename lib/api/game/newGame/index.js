'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/newGame',
    config: {
        validate: {
            payload: {
                name: Joi.string().required(),
                points: Joi.array().items(
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

        Handler.newGameRules(payload)
            .then((response) => {
                reply(response);
            });
    }
};
