'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/olympian/',
    config: {
        validate: {
            payload: {
                name: Joi.string().required(),
                description: Joi.string().required()
            }
        }
    },
    handler: (request, reply) => {

        return Handler.newOlympian(request.payload)
            .then((response) => {
                reply(response);
            });
    }
};
