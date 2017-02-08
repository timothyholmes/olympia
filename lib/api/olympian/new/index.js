'use strict';

const Handler = require('./handler'),
    _ = require('lodash'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/olympian/',
    config: {
        validate: {
            payload: {
                name: Joi.string().required()
            }
        }
    },
    handler: (request, reply) => {

        Handler.recordRecord(request.payload)
            .then((response) => {
                reply(response);
            })
            .catch((err) => {
                reply(err);
            });
    }
};
