'use strict';

const Joi = require('joi');

module.exports.id = {
    params: {
        id: Joi.number().required()
    }
};
