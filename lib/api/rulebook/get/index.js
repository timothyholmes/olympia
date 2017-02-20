'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/rulebook/{id?}',
    config: {
        validate: {
            params: {
                id: Joi.number().integer().optional()
            }
        }
    },
    handler: (request, reply) => {

        return Handler.getRulebook(request.params.id)
            .done(reply, reply);
    }
};
