const express = require('express'); //eslint-disable-line
const users = require('../components/users/network');
const records = require('../components/');
const auth = require('../components/auth/network');
const paths = (server) => {
    server.use('/users', users);
    server.use('/auth', auth);
    server.use('/records', records);
};

module.exports = paths;