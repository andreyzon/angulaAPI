const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const passport = require('passport');
require('../../utils/auth/jwt');
const {
    getUserSchema,
    getUsersSchema,
    deleteUsersSchema,
    createUserSchema
} = require('../../utils/schemas/users');


const validationHandler = require('../../utils/middleware/validationHandler');
const scopesValidationHandler = require('../../utils/middleware/scopesValidationHandler');

router.post('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('create_user'),
    validationHandler(createUserSchema),
    async (req, res) => {
        try {
            const { username, firstName, lastName, email, password, role } = req.body;
            const info = await controller.createUser(username, firstName, lastName, email, password, role);
            response.success(req, res, info);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);


router.get('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('read_users'),
    validationHandler(getUsersSchema, 'query'),
    async (req, res) => {
        const { username, email } = req.query;
        try {
            const info = await controller.listUsers(username, email);
            response.success(req, res, info, 200);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

router.get('/profile',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('read_user'),
    validationHandler({}, 'query'),
    async (req, res) => {
        const { id } = req.user;
        try {
            const info = await controller.getUser(id);
            response.success(req, res, info, 200);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('read_users'),
    validationHandler(getUserSchema, 'params'),
    async (req, res) => {
        const { id } = req.params;
        try {
            const info = await controller.getUser(id);
            response.success(req, res, info, 200);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler('delete_user'),
    validationHandler(deleteUsersSchema, 'params'),
    async (req, res) => {
        const { id } = req.params;
        try {
            const info = await controller.deleteUser(id);
            response.success(req, res, info, 200);
        } catch (error) {
            response.error(req, res, error);
        }
    }
);

module.exports = router;