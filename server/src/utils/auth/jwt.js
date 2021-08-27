const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { Users, sequelize } = require('../../database/models');

passport.use(
    new Strategy({
        secretOrKey: process.env.AUTH_JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
        async (tokenPayload, cb) => {
            try {
                let user = await Users.findOne({
                    where: { id: tokenPayload.id },
                    attributes: {
                        exclude: [
                            'password',
                            'createdAt',
                            'updatedAt'
                        ]
                    }
                });
                if (!user) {
                    return cb({ message: 'unauthorized' }, false);
                }
                user = user.toJSON();
                const scopes = await sequelize.query(`SELECT r.name as role, p.name, p.slug  
                FROM UsersRoles as ur
                JOIN Roles as r
                ON ur.roleId = r.id
                JOIN Users as u
                ON ur.userId = u.id
                JOIN PermissionsRoles as pr
                ON r.id=pr.roleId
                JOIN Permissions as p
                ON pr.permissionId = p.id
                WHERE u.id = :userId`, { replacements: { userId: user.id }, type: sequelize.QueryTypes.SELECT });
                cb(null, { ...user, role: scopes[0].role, scopes });
            } catch (error) {
                return cb(error);
            }
        }
    )
);