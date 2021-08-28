const response = require('../../network/response');

const errorHandler = (error, req, res, next) => { // eslint-disable-line
    return response.error(req, res, { ...error, internalMessage: error.message, internalCode: error.status }, 401);
};
const notFound = (req, res) =>
    (response.error(req, res, { internalMessage: 'not found', internalCode: 404 }, 404));

module.exports = {
    errorHandler,
    notFound,
};