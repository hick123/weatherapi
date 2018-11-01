// 'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
// var corsHeaders = require('hapi-cors-headers')
const activitymoodController= require('../src/controllers/actmood')

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes:{
        cors: true
    }
    });
// server = new Hapi.Server({ port: 4055, routes: { cors: { origin: ['localhost', 'localhost:3000'] } } });
server.route({
    method: 'GET',
    path: '/activitymoods',
    handler: activitymoodController.list
});
server.route({
    method: 'POST',
    path: '/activitymoods',
    handler: activitymoodController.create
});
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
// mongoose.connect('mongodb://ikorir:art@hicks123@ds225543.mlab.com:25543/weatherapp', { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/weatherapp", {
    useNewUrlParser: true
}).then(
    (res) => {
        console.log("Connected to Database Successfully.")
       }
).catch(() => {
    console.log("Connection to database failed.");
});
init();
// server.ext('onPreResponse', corsHeaders)
