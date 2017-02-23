'use strict';

const Data = require('../../../data/');

module.exports.searchStats = (statGroupId, type) => {

    return Data.cockroach.getData({
        fk_olympian_id: statGroupId.olympianId,
        fk_coliseum_id: statGroupId.coliseumId,
        fk_gametype_id: statGroupId.gametypeId
    }, 'olympian_stats');
};
