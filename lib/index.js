'use strict';

const Hapi = require('hapi'),
    Good = require('good'),
    api = require('./api'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

server.route(api.routes);

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
        throw err;
    }

    server.start((err) => {
        if (err) {
            throw err;
        }

        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
