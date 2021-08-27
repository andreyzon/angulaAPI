/**/
const withErrorStack = (error) => {
    console.error(error);
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        return { error: error.internalMessage ? error.internalMessage : 'Error API', errorComplete: error };
    }
    return { error: error.internalMessage ? error.internalMessage : 'Error API' };
};

const success = (req, res, result, status = 200) => {
    res.status(status).send({ error: '', result });
};

const error = (req, res, error, status = 500) => {
    res.status(error.internalStatus ? error.internalStatus : status).send(withErrorStack(error));
};

const original = (req, res, results, status = 200) => {
    res.status(status).send({
        error: '',
        ...results
    });
};

module.exports = { success, error, original };