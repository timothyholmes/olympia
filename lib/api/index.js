'use strict';

const Fifa = require('./fifa'),
    SuperSmashBros = require('./superSmashBros');

module.exports.routes = []
    .concat(Fifa)
    .concat(SuperSmashBros);
