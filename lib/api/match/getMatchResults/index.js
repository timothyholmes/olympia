'use strict';

const Handler = require('./handler'),
    Joi = require('joi'),
    _ = require('lodash');

module.exports = {
    method: 'GET',
    path: '/v2/{game}/matchResults',
    config: {
        validate: {
            params: {
                game: Joi.string().allow('fifa', 'ssb', 'nhl')
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
