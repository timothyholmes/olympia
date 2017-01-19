'use strict';

const Coliseum = require('./coliseum'),
    Game = require('./game'),
    Match = require('./match'),
    Olympian = require('./olympian');

module.exports.routes = []
    .concat(Coliseum)
    .concat(Game)
    .concat(Match)
    .concat(Olympian);
