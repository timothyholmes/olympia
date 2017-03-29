'use strict';

const PrepopData = require('./dataFiles'),
    Bluebird = require('bluebird'),
    Wreck = Bluebird.promisifyAll(require('wreck'));

function postToAPI (olympians) {
    return Bluebird.each(olympians, (entry) => {

        console.log('Olympian', entry);

        return Wreck.postAsync(
            process.env.SERVER_URL + entry.uri,
            { payload: entry.payload }
        )
        .then((resp, payload) => {

            console.log('result', payload);

            return true;
        });
    });
}

postToAPI(PrepopData.players);
