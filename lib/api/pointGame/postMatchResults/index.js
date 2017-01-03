'use strict';

const Handler = require('./handler'),
    Joi = require('joi'),
    _ = require('lodash');

module.exports = {
    method: 'POST',
    path: '/points/{game}/matchResults',
    config: {
        validate: {
            params: {
                game: Joi.string().allow('fifa', 'nhl')
            },
            payload: {
                players: Joi.array().items(
                    Joi.object().keys({
                        name: Joi.string().required(),
                        goalsFor: Joi.number().required(),
                        goalsAgainst: Joi.number().required(),
                        team: Joi.string().optional(),
                        sober: Joi.boolean().optional()
                    })
                ).min(2).max(2)
            }
        }
    },
    handler: (request, reply) => {
        let matchInfo = _.clone(request.payload);

        matchInfo.game = request.params.game;

        Handler.recordMatch(matchInfo)
            .then((response) => {
                reply(response);
            });
    }
};
