'use strict';

const Handler = require('./handler'),
    _ = require('lodash'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/olympian/new',
    config: {
        validate: {
            payload: {
                name: Joi.string().required()
            }
        }
    },
    handler: (request, reply) => {
        let payload = _.clone(request.payload);

        Handler.recordRecord(payload)
            .then((response) => {
                reply(response);
            })
            .catch((err) => {
                reply(err);
            });
    }
};
