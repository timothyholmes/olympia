'use strict';

const Joi = require('joi');

module.exports = {
    payload: {
        id: Joi.number().required()
    }
};
