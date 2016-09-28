'use strict';

const Joi = require('joi');

module.exports = {
    params: {
        id: Joi.number().required()
    }
};
