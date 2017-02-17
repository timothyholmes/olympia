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

    return Data.mongo.insert(olympian, 'olympians')
        .then((resp) => {
            let response = _.clone(resp);

            response.olympianId = olympian._id;

            return response;
        });
};
