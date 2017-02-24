'use strict';

const Hapi = require('hapi');
const Bell = require('bell');
const Config = require('./config');

const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });


server.register(Bell, (err) => {

    if (err) {
        throw err;
    }

    server.auth.strategy('facebook', 'bell', Config.facebook);

    server.route({
        method: "GET",
        path: '/',
        config: {
            auth: 'facebook',
            handler: (request, reply) => {
                reply("Hello");
            }
        }
    });

    server.start((err) => {

        if (err)
            throw err;

        console.log(`Server running at: ${server.info.uri}`);
    });
});

