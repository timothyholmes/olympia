'use strict';

const Handler = require('./handler'),
    Joi = require('joi'),
    _ = require('lodash');

module.exports = {
    method: 'POST',
    path: '/match/new/{gameId}',
    config: {
        validate: {
            params: {
                gameId: Joi.number()
            },
            payload: {
                players: Joi.array().items(
                    Joi.object().keys({
                        id: Joi.number().required(),
                        placement: Joi.number().required(),
                        points: Joi.array().items(
                            Joi.object().keys({
                                label: Joi.string().required(),
                                value: Joi.number().required()
                            })
                        ).min(1),
                        coliseum: Joi.number().required(),
                        minion: Joi.string().optional(),
                        sober: Joi.boolean().optional().default(true)
                    })
                ).min(2)
            }
        }
    },
    handler: (request, reply) => {
        let payload = _.clone(request.payload);

        payload.gameId = request.params.gameId;

        Handler.recordMatch(payload)
            .then((response) => {
                reply(response);
            });
    }
};
