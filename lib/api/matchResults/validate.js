'use strict';

const Joi = require('joi');

module.exports.validate = {
    payload: {
        name: Joi.string()
    }
};
