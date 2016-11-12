'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/matchResults/{name}/{filter}',
    config: {
        validate: {
            params: {
                name: Joi.string().required(),
                filter: Joi.string().valid('all', 'wins', 'losses')
            }
        }
    },
    handler: (request, reply) => {
        let params = request.params;

        Handler.getMatches(params)
            .then((response) => {
                reply(response);
            });
    }
};
