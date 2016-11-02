'use strict';

const Bluebird = require('bluebird'),
    mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient,
    url = process.env.MONGO_URL + 'fifa-scores';

module.exports.recordMatch = (payload) => {
    let response = {response: 'empty'};

    return Bluebird.try(() => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                throw new Error('Couldn\'t connect to mongo');
            } else {
                db.collection('matchResults').insert(payload, (err, result) => {
                    if (result) {
                        response = {
                            success: true,
                            recordsInserted: result.insertedCount
                        };
                    } else if (err) {
                        response = {
                            success: true,
                            error: err
                        };
                    }

                    db.close();

                    return response;
                });
            }
        });
    }).then((rowsAffected) => {
        return rowsAffected;
    }).catch((err) => {
        throw err;
    });
};
