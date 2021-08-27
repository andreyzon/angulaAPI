const joi = require('joi');

const validate = (data, schema) => {
    const objectJoi = joi.object(schema);
    const { error } = objectJoi.validate(data);
    return error;
};

module.exports = { validate };