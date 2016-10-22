'use strict';

const Joi = require('joi');

module.exports.validate = {
    payload: {
        winner: Joi.object().keys({
            name: Joi.string().required(),
            score: Joi.number().required()
        }),
        loser: Joi.object().keys({
            name: Joi.string().required(),
            score: Joi.number().required()
        })
    }
};
