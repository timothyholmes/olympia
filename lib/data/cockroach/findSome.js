'use strict';

const Roach = require('./index').connection;

module.exports = (query, parameters) => {

    return Roach.any(query, parameters)
        .then((result) => {

            return {
                success: true,
                result: result
            };
        })
        .catch((err) => {
            console.log(err);
        });
};
