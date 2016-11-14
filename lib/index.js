'use strict';

const Hapi = require('hapi'),
    Good = require('good'),
    api = require('./api'),
    server = new Hapi.Server(),
    Inert = require('inert'),
    Path = require('path');

let registerOptions = [{
        register: Inert,
        options: {}
    }, {
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
    }
];

server.connection({
    host: 'localhost',
    port: 8000,
    labels: 'api'
});

server.route(api.routes);

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        let uri = Path.join(__dirname, 'ui/index.html');

        reply.file(uri);
    }
});

server.register(registerOptions, (err) => {

    if (err) {
        throw err;
    }

    server.start((err) => {
        if (err) {
            throw err;
        }

        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
