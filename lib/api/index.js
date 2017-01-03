'use strict';

const PointGame = require('./pointGame'),
    PlayerInfo = require('./playerInfo'),
    jank = require('./pointGamev2'),
    SuperSmashBros = require('./superSmashBros');

module.exports.routes = []
    .concat(PointGame)
    .concat(PlayerInfo)
    .concat(jank)
    .concat(SuperSmashBros);
