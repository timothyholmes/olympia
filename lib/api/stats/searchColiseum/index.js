'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/stats/search/coliseum/{coliseumId}/{gametypeId}',
    config: {
        validate: {
            params: {
                coliseumId: Joi.number().integer().required(),
                gametypeId: Joi.number().integer().required(),
            }
        }
    },
    handler: (request, reply) => {

        return Handler.searchStats(request.params)
            .done(reply, reply);
    }
};
