'use strict';

const PointGame = require('./pointGame'),
    PlayerInfo = require('./playerInfo'),
    SuperSmashBros = require('./superSmashBros');

module.exports.routes = []
    .concat(PointGame)
    .concat(PlayerInfo)
    .concat(SuperSmashBros);
