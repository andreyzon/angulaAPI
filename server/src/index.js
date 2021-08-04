require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { errorHandler, notFound } = require('./utils/middleware/errorHandlers');
const router = require('./network/routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);
app.use('/*', notFound);
app.use(errorHandler);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server of ${process.env.NODE_ENV} online in ${process.env.PORT}`);
});

process.on('unhandledRejection', error => {
    console.error('UnhandledRejection', error);
});

process.on('unhandledException', error => {
    console.error('unhandledException', error);
});