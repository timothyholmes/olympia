'use strict';

const Data = require('../../../data/'),
    _ = require('lodash');

function Olympian(name) {
    let _this = this;

    _this.name = name;
    _this.id = Date.now();
}

module.exports.recordRecord = (payload) => {
    let params = _.clone(payload),
        olympian;

    olympian = new Olympian(params.name);

    return Data.Insert.insertToMongo(olympian, 'olympians')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
