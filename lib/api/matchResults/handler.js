'use strict';

module.exports.handler = function (request, reply) {
    // Get the task
    var name = request.payload.name;
    // Let's store the task
    reply({key: name});
};
