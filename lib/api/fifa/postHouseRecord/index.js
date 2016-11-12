'use strict';

const Handler = require('./handler'),
    Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/fifa/houseRecord',
    config: {
        validate: {
            payload: {
                player: Joi.string().required(),
                recordName: Joi.string().required(),
                recordValue: Joi.string().required()
            }
        }
    },
    handler: (request, reply) => {
        let payload = request.payload;

        Handler.recordRecord(payload)
            .then((response) => {
                reply(response);
            });
    }
};
