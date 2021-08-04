const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const { Users, sequelize } = require('../../database/models');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

passport.use(
    new BasicStrategy(async (username_email, password, cb) => {
        try {
            let user = await Users.findOne({
                where: {
                    [Op.or]: [
                        { email: username_email },
                        { username: username_email }
                    ],
                },
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                }
            });
            if (!user) {
                return cb({ message: 'unauthorized' }, false);
            }
            user = JSON.parse(JSON.stringify(user));
            const pass = await bcrypt.compare(password, user.password);
            if (!pass) {
                return cb({ message: 'unauthorized' }, false);
            }
            user.password = undefined;
            delete user.password;
            let permissions = await sequelize.query(`SELECT r.name as "role", p.name, p.slug  
            FROM public."UsersRoles" as ur
            JOIN public."Roles" as r
            ON ur."roleId" = r.id
            JOIN public."Users" as u
            ON ur."userId" = u.id
            JOIN public."PermissionsRoles" as pr
            ON r.id=pr."roleId"
            JOIN public."Permissions" as p
            ON pr."permissionId" = p.id
            WHERE u.id = :userId`, { replacements: { userId: user.id }, type: sequelize.QueryTypes.SELECT });
            return cb(null, { ...user, permissions, role: permissions[0].role });
        } catch (error) {
            return cb(error);
        }
    })
);