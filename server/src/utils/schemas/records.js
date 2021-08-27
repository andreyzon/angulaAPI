const joi = require('joi');

const RecordIdSchema = joi.number();
const NodeIdSchema = joi.number();
const RecordNameSchema = joi.string();
const RecordIpSchema = joi.string().ip();

const listRecordsSchema = {};

const getRecordByNodeId = {
    id: RecordIdSchema.required()
};

const updateRecordsSchema = {
    id: RecordIdSchema.required(),
    temperatura: RecordNameSchema,
    ip: RecordIpSchema
};

const createRecordSchema = {
    Tarjeta: NodeIdSchema.required(),
    temperatura: RecordNameSchema.required(),
    ip: RecordIpSchema.required(),
};

module.exports = {
    listRecordsSchema,
    getRecordByNodeId,
    updateRecordsSchema,
    createRecordSchema
};