const express = require('express'); //eslint-disable-line
const users = require('../components/users/network');
const records = require('../components/records/network');
const nodes = require('../components/nodes/network');
const auth = require('../components/auth/network');
const paths = (server) => {
    server.use('/users', users);
    server.use('/auth', auth);
    server.use('/nodes', nodes);
    server.use('/', records);
};

module.exports = paths;