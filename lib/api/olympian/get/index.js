'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/olympian/{name}',
    config: {
        validate: {
            params: {
                name: Joi.string().required()
            }
        }
    },
    handler: (request, reply) => {
        let params = request.params;

        Handler.getPlayers(params)
            .then((response) => {
                reply(response);
            });
    }
};
