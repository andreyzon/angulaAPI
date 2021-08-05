const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const passport = require('passport');
const controller = require('./controller');
require('../../utils/auth/jwt');
const {
    createNodeSchema,
    getNodeSchema,
    updateNodesSchema,
    listNodesSchema,
    //deleteNodesSchema,
} = require('../../utils/schemas/nodes');

const validationHandler = require('../../utils/middleware/validationHandler');
const scopesValidationHandler = require('../../utils/middleware/scopesValidationHandler');

router.post('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('create_node'),
    validationHandler(createNodeSchema, 'body'),
    async (req, res) => {
        const { name, description, type } = req.body;
        try {
            const nodes = await controller.createNodes(name, description, type);
            response.success(req, res, nodes);
        } catch (error) {
            response.error(req, res, { ...error, internalMessage: { message: 'Error create category', detail: error.parent.detail }, internalCode: 400 });
        }
    }
);

router.get('/',
    validationHandler(listNodesSchema, 'query'),
    async (req, res) => {
        const { type } = req.query;
        try {
            const nodes = await controller.listNodes(type);
            response.success(req, res, nodes);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

router.get('/:id',
    validationHandler(getNodeSchema, 'query'),
    async (req, res) => {
        const { id } = req.params;
        try {
            const nodes = await controller.getNode(id);
            response.success(req, res, nodes);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

router.patch('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('update_category'),
    validationHandler(updateNodesSchema),
    async (req, res) => {
        const { id, description, name } = req.body;
        try {
            await controller.updateNode(id, description, name);
            response.success(req, res, 'ok');
        } catch (error) {
            response.error(req, res, error);
        }
    }
);



module.exports = router;