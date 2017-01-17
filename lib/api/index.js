'use strict';

const PointGame = require('./pointGame'),
    PlayerInfo = require('./playerInfo'),
    jank = require('./pointGamev2'),
    game = require('./game'),
    SuperSmashBros = require('./superSmashBros');

module.exports.routes = []
    .concat(PointGame)
    .concat(PlayerInfo)
    .concat(jank)
    .concat(game)
    .concat(SuperSmashBros);
