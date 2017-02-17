'use strict';

const Bluebird = require('bluebird'),
    MongoDB = require('mongodb'),
    Url = process.env.MONGO_URL + 'greenwoodOlympia' + process.env.MONGO_DEV;

module.exports = (findOptions, collectionName) => {
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
                response: result
            };
        })
        .catch((err) => {
            throw {
                success: false,
                error: err
            };
        });
};
