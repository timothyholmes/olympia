'use strict';

const Handler = require('./handler'),
    _ = require('lodash'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/coliseum/{id?}',
    config: {
        validate: {
            params: {
                id: Joi.number().integer().optional()
            }
        }
    },
    handler: (request, reply) => {

        return Handler.getColiseum(request.params.id)
            .done(reply, reply);
    }
};
