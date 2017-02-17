'use strict';

const Bluebird = require('bluebird'),
    Crdb = require('pg-promise'),
    Url = process.env.MONGO_URL + 'greenwoodOlympia' + process.env.MONGO_DEV;

module.exports = (query) => {
    let cockroachInstance = new Crdb(),
        config = {
            user: 'root',
            host: 'localhost',
            database: (process.env.ENV === 'prod') ? 'olympia' : 'olympia_dev',
            port: 26257
        },
        conn;

    cockroachInstance.connect(config)
        .then(function (connection) {

        console.log('connection');

        conn = connection;

        return conn.client.query(query);
    }).then(function (result) {
        let resp = {
            success: true,
            result: result.rows
        };

        conn.done();

        console.log('result', resp);

        return resp;
    }).catch(function (error) {

        console.log(error);
    });
};
