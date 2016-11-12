'use strict';

const Bluebird = require('bluebird'),
    MongoDB = require('mongodb'),
    Url = process.env.MONGO_URL + 'greenwoodOlympia';

module.exports.insertToMongo = (payload, collectionName) => {
    let connection;

    Bluebird.promisifyAll(MongoDB);

    return MongoDB.MongoClient.connectAsync(Url)
        .then((db) => {
            connection = db;

            return db.collection(collectionName).insert(payload);
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
