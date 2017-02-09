'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/olympian/{id?}',
    config: {
        validate: {
            params: {
                id: Joi.number().optional()
            }
        }
    },
    handler: (request, reply) => {

        Handler.getPlayers(request.params.id)
            .then((response) => {
                reply(response);
            });
    }
};
