require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    database_name:
        process.env.NODE_ENV === 'production' ? process.env.DB_NAME_PRO
            : process.env.DB_NAME_DEV,
    database_user:
        process.env.NODE_ENV === 'production' ? process.env.DB_USER_PRO
            : process.env.DB_USER_DEV,
    database_port:
        process.env.NODE_ENV === 'production' ? process.env.DB_PORT_PRO
            : process.env.DB_PORT_DEV,
    database_host:
        process.env.NODE_ENV === 'production' ? process.env.DB_HOST_PRO
            : process.env.DB_HOST_DEV,
    database_pass:
        process.env.NODE_ENV === 'production' ? process.env.DB_PASS_PRO
            : process.env.DB_PASS_DEV,
};

module.exports = { config };