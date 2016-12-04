'use strict';

const PrepopData = require('./prodData'),
    Bluebird = require('bluebird'),
    Wreck = Bluebird.promisifyAll(require('wreck'));

function loopEm (array) {
    return Bluebird.each(array, (dataEntry) => {
        console.log('dataEntry', dataEntry);
        return Wreck.postAsync(
            process.env.SERVER_URL + dataEntry.uri,
            { payload: dataEntry.payload }
        )
        .then((resp) => {
            console.log('yay');
        })
        .catch((err) => {
            console.log('shucks');
        });
    });
}

loopEm(PrepopData);
