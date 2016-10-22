'use strict';

module.exports.handler = function (request, reply) {
    // Get the task
    var name = request.payload;
    // Let's store the task
    reply({key: name});
};
