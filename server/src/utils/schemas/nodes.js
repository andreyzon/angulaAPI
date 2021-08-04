const joi = require('joi');

const NodeIdSchema = joi.number();
const NodeNameSchema = joi.string();
const NodeDescriptionSchema = joi.string();

const getNodeSchema = {
    id: NodeIdSchema,
};

const updateNodesSchema = {
    id: NodeIdSchema.required(),
    description: NodeDescriptionSchema.required(),
    name: NodeNameSchema.required()
};

const deleteNodesSchema = {
    id: NodeIdSchema.required()
};

const createNodeSchema = {
    name: NodeNameSchema.required(),
    description: NodeDescriptionSchema.required(),
};

const listNodesSchema = {};

module.exports = {
    createNodeSchema,
    getNodeSchema,
    updateNodesSchema,
    deleteNodesSchema,
    listNodesSchema
};