'use strict';

const Roach = require('./index').connection;

module.exports = (query) => {

    return Roach.any(query)
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
