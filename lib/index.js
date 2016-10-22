'use strict';

const Hapi = require('hapi');
const Good = require('good');
const api = require('./api');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

server.route(api.matchResults);
// server.route({
//     method: 'POST',
//     path: '/tasks',
//     handler: function (request, reply) {
//         // Get the task
//         var task = request.payload.task;
//         // Let's store the task
//         reply({key: task});
//     }
// });

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
