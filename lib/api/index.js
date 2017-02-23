'use strict';

const Coliseum = require('./coliseum'),
    Match = require('./match'),
    Rulebook = require('./rulebook'),
    Olympian = require('./olympian');

module.exports.routes = []
    .concat(require('./coliseum'))
    .concat(require('./match'))
    .concat(require('./rulebook'))
    .concat(require('./olympian'))
    .concat(require('./stats'));
