'use strict';

const Bluebird = require('bluebird');
const mongodb = require('mongodb');

module.exports.recordMatch = function(payload) {
    let success = true,
        MongoClient = mongodb.MongoClient,
        url = process.env.MONGO_URL + 'fifa-scores';

    MongoClient.connect(url, function (err, db) {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        console.log('Connection established to', url);

        db.matchResults.insert(payload);

        db.close();
      }
    });

    return success;
};
