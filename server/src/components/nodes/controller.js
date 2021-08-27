const { Nodes } = require('../../database/models');

const createNodes = async (name, description, type) =>
    Nodes.create({ name, description, type });

const getNode = (id) =>
    Nodes.findOne({
        where: { id }
    });

const listNodes = (type) => {
    let where = {};
    if (type) where = { type };
    return Nodes.findAll({
        where,
    });
};

const updateNode = (id, description, name) =>
    Nodes.update({ description, name }, { where: { id } });

module.exports = {
    createNodes,
    listNodes,
    getNode,
    updateNode
};