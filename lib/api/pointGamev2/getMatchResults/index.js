'use strict';

const Handler = require('./handler'),
    Joi = require('joi'),
    _ = require('lodash');

module.exports = {
    method: 'GET',
    path: '/test/{game}/matchResults/{name}/{filter?}',
    config: {
        validate: {
            params: {
                game: Joi.string().allow('fifa', 'nhl'),
                name: Joi.string().required(),
                filter: Joi.string().optional().valid('wins', 'losses')
            }
        }
    },
    handler: (request, reply) => {
        let matchInfo = _.clone(request.params);

        Handler.getMatches(matchInfo)
            .then((response) => {
                reply(response);
            });
    }
};
