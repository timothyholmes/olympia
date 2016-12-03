'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/player/{name?}',
    config: {
        validate: {
            params: {
                name: Joi.string()
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
