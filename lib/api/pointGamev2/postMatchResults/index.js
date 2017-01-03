'use strict';

const Handler = require('./handler'),
    Joi = require('joi'),
    _ = require('lodash');

module.exports = {
    method: 'POST',
    path: '/test/{game}/matchResults',
    config: {
        validate: {
            params: {
                game: Joi.string().allow('fifa', 'nhl', 'ssb')
            },
            payload: {
                players: Joi.array().items(
                    Joi.object().keys({
                        name: Joi.string().required(),
                        placement: Joi.string().required(),
                        points: Joi.array().items(
                            Joi.object().keys({
                                label: Joi.string().required(),
                                value: Joi.number().required()
                            })
                        ).min(1),
                        minion: Joi.string().optional(),
                        sober: Joi.boolean().optional().default(true)
                    })
                ).min(2).max(4)
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
