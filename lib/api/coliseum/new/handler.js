'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

function Coliseum(name) {
    let _this = this;

    _this.id = Date.now();
    _this.name = name;
}

module.exports.newColiseum = (payload) => {
    let params = _.clone(payload),
        coliseum = {};

    coliseum.name = params.name;
    coliseum.olympians = params.olympians;

    return Bluebird.map(params.games, (gameId) => {
        let options = {
            id: gameId
        };

        return Data.Find.pullFromMongo(options, 'games')
        .then((response) => {
            let game = _.clone(response.response[0]),
                keys = Object.keys(game.points);

            return Bluebird.map(keys, (point) => {
                coliseum[game.name] = {};
                coliseum[game.name][point] = 0;
            });
        });
    }).then(()=>{
        return Data.Insert.insertToMongo(coliseum, 'coliseums')
        .then((response) => {
            return response;
        });
    });
};
