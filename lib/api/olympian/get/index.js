'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/olympian/{id?}',
    config: {
        validate: {
            params: {
                id: Joi.number().integer().optional()
            }
        }
    },
    handler: (request, reply) => {

        return Handler.getOlympians(request.params.id)
            .done(reply, reply);
    }
};
