'use strict';

const Data = require('../../../data/'),
    _ = require('lodash');

function Olympian(name) {
    let _this = this;

    _this.name = name;
    _this._id = Date.now();
}

module.exports.recordRecord = (payload) => {
    let olympian = new Olympian(payload.name);

    return Data.Insert.insertToMongo(olympian, 'olympians')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
