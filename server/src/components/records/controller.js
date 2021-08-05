const { Records } = require('../../database/models');

const createRecords = async (nodeId, ip, temperature) =>
    Records.create({ nodeId: Number(nodeId), ip, temperature });

const getRecord = (nodeId) =>
    Records.findAll({
        where: { nodeId },
        order: ['createdAt','DESC'],
        limit: 20
    });

const listRecords = () =>
    Records.findAll({
        where: {},
    });

const updateRecord = (id, temperature, ip) =>
    Records.update({ temperature, ip }, { where: { id } });

module.exports = {
    createRecords,
    listRecords,
    getRecord,
    updateRecord
};