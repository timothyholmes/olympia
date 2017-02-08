'use strict';

const Coliseum = require('./coliseum'),
    Match = require('./match'),
    Rulebook = require('./rulebook'),
    Olympian = require('./olympian');

module.exports.routes = []
    .concat(Coliseum)
    .concat(Match)
    .concat(Rulebook)
    .concat(Olympian);
