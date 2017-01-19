'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/game/new',
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

        Handler.newGame(payload)
            .then((response) => {
                reply(response);
            });
    }
};
