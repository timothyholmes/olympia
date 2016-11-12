'use strict';

const Fifa = require('./fifa'),
    PlayerInfo = require('./playerInfo'),
    SuperSmashBros = require('./superSmashBros');

module.exports.routes = []
    .concat(Fifa)
    .concat(PlayerInfo)
    .concat(SuperSmashBros);
