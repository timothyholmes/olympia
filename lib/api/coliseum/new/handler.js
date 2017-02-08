'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');

function Coliseum (name, olympians) {
    let _this = this;

    _this._id = Date.now();
    _this.name = name;
    _this.stats = [];
}

module.exports.newColiseum = (payload) => {
    let coliseum = new Coliseum(payload.name, payload.olympians);

    return Data.Insert.insertToMongo(coliseum, 'coliseums')
        .then((resp) => {
            let response = _.clone(resp);

            response.coliseumId = coliseum._id;

            return response;
        });
};
