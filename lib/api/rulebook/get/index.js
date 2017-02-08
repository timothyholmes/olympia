'use strict';

const Handler = require('./handler'),
    _ = require('lodash'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/rulebook/{id}',
    config: {
        validate: {
            params: {
                id: Joi.number().required()
            }
        }
    },
    handler: (request, reply) => {

        Handler.getRulebook(request.params.id)
            .then((response) => {
                reply(response);
            });
    }
};
