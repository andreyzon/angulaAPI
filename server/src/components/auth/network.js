const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const response = require('../../network/response');
// Basic strategy - API
require('../../utils/auth/basic');

router.post('/sign-in', async (req, res, next) => {
  passport.authenticate('basic', (error, user) => {
    try {
      if (error || !user) {
        return next(error);
      } else {
        req.login(user, { session: false }, async (error) => {
          if (error) {
            return next(error);
          } else {
            const { id, username, email, role } = user;
            const payload = {
              id,
              username,
              role,
            };
            const permission = user.permissions.map(
              (permission) => permission.slug
            );

            const token = jwt.sign(
              payload,
              process.env.AUTH_JWT_SECRET || 'secret',
              {
                expiresIn: '30d',
              }
            );
            return response.success(req, res, {
              token,
              user: { ...payload, email },
              permission,
              role: user.permissions[0].role,
            });
          }
        });
      }
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

module.exports = router;
