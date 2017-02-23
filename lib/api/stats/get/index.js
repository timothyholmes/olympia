'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/stats/{type}/{id?}',
    config: {
        validate: {
            params: {
                id: Joi.number().integer().optional(),
                type: Joi.string().allow('olympian', 'coliseum').default('olympian')
            }
        }
    },
    handler: (request, reply) => {

        return Handler.getStats(request.params.id, request.params.type)
            .done(reply, reply);
    }
};
