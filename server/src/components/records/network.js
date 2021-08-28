const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const passport = require('passport');
const controller = require('./controller');
require('../../utils/auth/jwt');
const {
    createRecordSchema,
    getRecordSchema,
    listRecordsSchema,
    //updateRecordsSchema,
    //deleteRecordsSchema,
} = require('../../utils/schemas/records');

const validationHandler = require('../../utils/middleware/validationHandler');
const scopesValidationHandler = require('../../utils/middleware/scopesValidationHandler');

router.post('/',
    validationHandler(createRecordSchema, 'body'),
    async (req, res) => {
        const { Tarjeta, ip, temperatura } = req.body;
        try {
            const records = await controller.createRecords(Tarjeta, ip, temperatura);
            response.success(req, res, records);
        } catch (error) {
            response.error(req, res, { ...error, internalMessage: { message: 'Error create category', detail: error.parent.detail }, internalCode: 400 });
        }
    }
);

router.get('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('read_records'),
    validationHandler(listRecordsSchema, 'query'),
    async (req, res) => {
        try {
            const records = await controller.listRecords();
            response.success(req, res, records);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('read_record'),
    validationHandler(getRecordSchema, 'query'),
    async (req, res) => {
        const { id } = req.params;
        try {
            const records = await controller.getRecord(id);
            response.success(req, res, records);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

module.exports = router;