'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/houseRecord/{name}',
    config: {
        validate: {
            params: {
                name: Joi.string().required()
            }
        }
    },
    handler: (request, reply) => {
        let params = request.params;

        Handler.getMatches(params)
            .then((response) => {
                reply(response);
            });
    }
};
