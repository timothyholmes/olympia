'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/ssb/{version}/matchResults/{name?}',
    config: {
        validate: {
            params: {
                name: Joi.string().default('all'),
                version: Joi.string().required().allow('og', 'melee', 'brawl')
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
