'use strict';

const Data = require('../../../data/');

module.exports.recordMatch = (payload, version) => {
    let collectionName = 'ssbMatchResults' + version;

    return Data.Insert.insertToMongo(payload, collectionName)
        .then((response) => {
            payload.players.forEach((player) => {
                let findOptions = {
                        name: player.name
                    },
                    updateOptions = {

                    };

                    // Need to search mongo by array of object

                    return Data.Find.pullFromMongo('players', {name:player.name})
                    .then((response) => {
                        console.log(response);
                    });



                // return Data.Update.updateRecord(findOptions, updateOptions, collectionName);
            });
        }).then((response) => {
            console.log(response);
        });
};
