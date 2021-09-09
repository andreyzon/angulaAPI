const {
  Records,
  Nodes,
  Electrics,
  Temperatures,
} = require('../../database/models');

const createRecords = async (nodeId, ip, record) => {
  let node = await Nodes.findOne({ where: { id: nodeId } });
  node = JSON.parse(JSON.stringify(node));
  if (!node) return {};
  if (node.type === 'electric') {
    await Electrics.create({ nodeId, electric: record });
  } else {
    await Temperatures.create({ nodeId, temperature: record });
  }
  return Records.create({ nodeId, ip, record, type: node.type });
};

const getRecord = (nodeId) =>
  Records.findAll({
    where: { nodeId },
    order: [['createdAt', 'DESC']],
    limit: 20,
  });

const listRecords = () =>
  Records.findAll({
    where: {},
  });

const updateRecord = (id, record, ip) =>
  Records.update({ record, ip }, { where: { id } });

module.exports = {
  createRecords,
  listRecords,
  getRecord,
  updateRecord,
};
