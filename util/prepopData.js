'use strict';

const PrepopData = require('./dataFiles'),
    Bluebird = require('bluebird'),
    Wreck = Bluebird.promisifyAll(require('wreck'));

(function loopEm (array) {
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
})(
    [].concat(PrepopData.players)
    .concat(PrepopData.houseRecords)
    .concat(PrepopData.nhl)
    .concat(PrepopData.ssb)
    .concat(PrepopData.fifa)
);
