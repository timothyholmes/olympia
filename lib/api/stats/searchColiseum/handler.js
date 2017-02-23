'use strict';

const Data = require('../../../data/');

module.exports.searchStats = (statGroupId, type) => {

    return Data.cockroach.getData({
        fk_coliseum_id: statGroupId.coliseumId,
        fk_gametype_id: statGroupId.gametypeId
    }, 'coliseum_stats');
};
