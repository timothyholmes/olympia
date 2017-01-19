'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

function Game(name, rules) {
    let points = {},
        _this = this;

    rules.forEach((e) => {
        points[e.label] = e.type;
    });

    _this.id = Date.now();
    _this.name = name;
    _this.points = points;
}

module.exports.newGame = (payload) => {
    let params = _.clone(payload),
        game;

    game = new Game(params.name, params.points);

    return Data.Insert.insertToMongo(game, 'games')
        .then((response) => {
            return response;
        });
};
