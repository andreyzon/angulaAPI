const { validate } = require('../lib/validator');

const validationHandler = (schema, check = 'body') => ((req, res, next) => {
    const error = validate(req[check], schema);
    if (!error) return next();
    const errors = error.details.map(e => ({ message: e.message, ok: false }));
    const message = `Error ${error.details[0].message}`;
    return next({ message, errors, status: 400 });
});

module.exports = validationHandler;