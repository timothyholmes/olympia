'use strict';

const Hapi = require('hapi'),
    Good = require('good'),
    api = require('./api'),
    Inert = require('inert'),
    Path = require('path');

let server = new Hapi.Server(),
    registerOptions = [{
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
        let uri = Path.join(__dirname, 'ui/src/index.html');

        reply.file(uri);
    }
});

server.route({
    method: 'GET',
    path: '/vue.js',
    handler: (request, reply) => {
        let uri = __dirname.split('/'),
            index = uri.indexOf('lib');

        if (index > -1) {
            uri.splice(index, 1);
        }

        uri = Path.join(uri.join('/'), 'node_modules/vue/dist/vue.min.js');

        reply.file(uri);
    }
});

server.route({
    method: 'GET',
    path: '/{pathToFile*}',
    handler: (request, reply) => {
        let uri = Path.join(__dirname, request.params.pathToFile);

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
