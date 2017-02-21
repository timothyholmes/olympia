'use strict';

const Roach = require('./index').connection;

module.exports = (query, params) => {

    return Roach.any(query, params)
        .then((result) => {

            return {
                success: true,
                result: result
            };
        });
};
