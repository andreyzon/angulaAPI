const { Records } = require('../../database/models');

const createRecords = async (nodeId, ip, temperature) =>
    Records.create({ nodeId: Number(nodeId), ip, temperature });

const getNode = (nodeId) =>
    Records.findOne({
        where: { nodeId }
    });

const listRecords = () =>
    Records.findAll({
        where: {},
    });

const updateNode = (id, temperature, ip) =>
    Records.update({ temperature, ip }, { where: { id } });

module.exports = {
    createRecords,
    listRecords,
    getNode,
    updateNode
};