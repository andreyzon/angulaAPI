module.exports = {
    development: {
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASS_DEV,
        database: process.env.DB_NAME_DEV,
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_PORT_DEV,
        dialect: 'mysql'
    },
    production: {
        username: process.env.DB_USER_PRO,
        password: process.env.DB_PASS_PRO,
        database: process.env.DB_NAME_PRO,
        host: process.env.DB_HOST_PRO,
        port: process.env.DB_PORT_PRO,
        dialect: 'mysql',
    }
};