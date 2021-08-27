const joi = require('joi');
const AnySchema = joi.any();
const userIdSchema = joi.number().allow(null);
const userNameSchema = joi.string().max(30);
const userFirstNameSchema = joi.string().max(30);
const userLastNameSchema = joi.string().max(30);
const userEmailSchema = joi.string().email({ tlds: { allow: false } });
const userPassSchema = joi.string();
const userRoleSchema = joi.string();

const userSchema = {
    id: userIdSchema,
    username: userNameSchema.required(),
    firstName: userFirstNameSchema.required(),
    lastName: userLastNameSchema.required(),
    email: userEmailSchema.required(),
    createdAt: AnySchema.required(),
    updatedAt: AnySchema.required()
};

const usersSchema = {
    users: joi.array().items(joi.object(userSchema)).required(),
};

const createUserSchema = {
    firstName: userFirstNameSchema.required(),
    lastName: userLastNameSchema.required(),
    username: userNameSchema.required(),
    password: userPassSchema.required(),
    email: userEmailSchema.required(),
    role: userRoleSchema
};

const createUsersSchema = {
    users: joi.array().items(joi.object({
        username: userNameSchema.required(),
        password: userPassSchema.required(),
        email: userEmailSchema.required(),
        role: userRoleSchema
    })).required()
};

const getUserSchema = {
    id: userIdSchema.required(),
};
const getProfileSchema = {
    id: userIdSchema
};

const getUsersSchema = {
    username: userNameSchema,
    email: userEmailSchema
};

const updateUsersSchema = {
    id: userIdSchema.required()
};

const deleteUsersSchema = {
    id: userIdSchema.required()
};

module.exports = {
    getUserSchema,
    getUsersSchema,
    updateUsersSchema,
    deleteUsersSchema,
    createUserSchema,
    createUsersSchema,
    getProfileSchema,
    userSchema,
    usersSchema
};