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
    record: RecordNameSchema,
    ip: RecordIpSchema
};

const createRecordSchema = {
    nodeId: NodeIdSchema.required(),
    record: RecordNameSchema.required(),
    ip: RecordIpSchema.required(),
};

module.exports = {
    listRecordsSchema,
    getRecordByNodeId,
    updateRecordsSchema,
    createRecordSchema
};