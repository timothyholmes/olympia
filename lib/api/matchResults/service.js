'use strict';

const Bluebird = require('bluebird'),
    MongoDB = require('mongodb'),
    url = process.env.MONGO_URL + 'fifa-scores';

module.exports.recordMatch = (payload) => {
    let connection;

    Bluebird.promisifyAll(MongoDB);

    return MongoDB.MongoClient.connectAsync(url)
        .then((db) => {
            connection = db;

            return db.collection('matchResults').insert(payload);
        })
        .then((result) => {
            connection.close();

            return {
                success: true,
                recordsInserted: result.insertedCount
            };
        })
        .catch((err) => {
            return {
                success: false,
                error: err
            };
        });
};
