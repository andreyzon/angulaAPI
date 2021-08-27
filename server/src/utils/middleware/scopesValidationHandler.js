const scopesValidationHandler = (allowedScope) => (async (req, res, next) => {
    if (process.env.NODE_ENV === 'development') return next();
    if (!req.user) return next({ message: 'unauthorized user', status: 401 });
    const hasAccess = req.user.scopes.find(scope => (scope.slug === allowedScope));
    if (hasAccess) {
        next();
    } else {
        next({ message: 'unauthorized scopes', status: 401 });
    }
}
);


module.exports = scopesValidationHandler;