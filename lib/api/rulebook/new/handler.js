'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

function Rulebook (name, rules) {
    let points = {},
        _this = this;

    rules.forEach((e) => {
        points[e.label] = e.type;
    });

    _this._id = Date.now();
    _this.name = name;
    _this.points = points;
}

module.exports.newRulebook = (payload) => {
    let rulebook = new Rulebook(payload.name, payload.rules);

    return Data.Insert.insertToMongo(rulebook, 'rulebooks')
        .then((response) => {
            return response;
        });
};
