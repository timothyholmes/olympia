'use strict';

const Joi = require('joi');

module.exports = {
    payload: {
        name: Joi.string()
    }
};
