const { Nodes } = require('../../database/models');

const createNodes = async (name, description) =>
    Nodes.create({ name, description });

const getNode = (id) =>
    Nodes.findOne({
        where: { id }
    });

const listNodes = () =>
    Nodes.findAll({
        where: {},
    });

const updateNode = (id, description, name) =>
    Nodes.update({ description, name }, { where: { id } });

module.exports = {
    createNodes,
    listNodes,
    getNode,
    updateNode
};