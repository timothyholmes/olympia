'use strict';

const Bluebird = require('bluebird'),
    mongodb = require('mongodb');

module.exports.recordMatch = (payload) => {
    var response = {response: 'empty'},
        MongoClient = mongodb.MongoClient,
        url = process.env.MONGO_URL + 'fifa-scores';

    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            console.log('Connection established to', url);

            db.collection('matchResults').insert(payload, (err, result) => {
                if (result) {
                    console.log(result);
                    console.log(response);
                    response = {
                        success: true,
                        recordsInserted: result.insertedCount
                    };
                    console.log(response);
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
};
