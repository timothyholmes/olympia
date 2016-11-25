'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/newPlayer',
    config: {
        validate: {
            payload: {
                id: Joi.number().required(),
                name: Joi.string().required(),
                ssbCharacterOfChoice: Joi.string().required(),
                fifaClubOfChoice: Joi.string().required()
            }
        }
    },
    handler: (request, reply) => {
        let payload = request.payload;

        Handler.recordRecord(payload)
            .then((response) => {
                reply(response);
            });
    }
};
