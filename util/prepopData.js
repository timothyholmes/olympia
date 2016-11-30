'use strict';

const Wreck = require('wreck'),
    PrepopData = require('./data'),
    Bluebird = require('bluebird');

Bluebird.map(PrepopData, (dataEntry) => {
    Wreck.post(process.env.SERVER_URL + dataEntry.uri, { payload: dataEntry.payload }, (err, res, payload) => {
        if (err) {
            console.log('error! ', err);
        }
        console.log('Successfully Added: ', dataEntry);
    });
});
