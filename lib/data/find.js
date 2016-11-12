'use strict';

const Bluebird = require('bluebird'),
    MongoDB = require('mongodb'),
    Url = process.env.MONGO_URL + 'greenwoodOlympia' + process.env.MONGO_DEV;

module.exports.pullFromMongo = (collectionName, findOptions) => {
    let connection;

    Bluebird.promisifyAll(MongoDB);

    return MongoDB.MongoClient.connectAsync(Url)
        .then((db) => {
            connection = db;

            return db.collection(collectionName).find(findOptions).toArray();
        })
        .then((result) => {
            connection.close();

            return {
                success: true,
                result: result
            };
        })
        .catch((err) => {
            return {
                success: false,
                error: err
            };
        });
};
