module.exports = {
  development: {
    username: process.env.DB_USER_DEV || 'root',
    password: process.env.DB_PASS_DEV || 'pass1234',
    database: process.env.DB_NAME_DEV || 'data_base_kiosco',
    host: process.env.DB_HOST_DEV || 'localhost',
    port: process.env.DB_PORT_DEV || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER_PRO,
    password: process.env.DB_PASS_PRO,
    database: process.env.DB_NAME_PRO,
    host: process.env.DB_HOST_PRO,
    port: process.env.DB_PORT_PRO,
    dialect: 'mysql',
  },
};
