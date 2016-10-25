'use strict';

const Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/houseRecord',
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
        var payload = request.payload;

        reply({success: payload});
    }
};
