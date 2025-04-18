const Joi = require("joi");

// creating schema for Joi validation
const validateCreateUser = Joi.object({
    firstName: Joi.string()
        .trim()
        .required()
        .messages({ // provide a clear and readable message for different scenario
            'string.empty': 'First name is required.',
            'any.required': 'First name is mandatory.',
        }),
    lastName: Joi.string()
        .trim()
        .required()
        .messages({
            'string.empty': 'Last name is required.',
            'any.required': 'Last name is mandatory.',
        }),
    hobby: Joi.string()
        .trim()
        .required()
        .messages({
            'string.empty': 'Hobby is required.',
            'any.required': 'Hobby is mandatory.',
        }),
});

// all field will be optional but will not allow empty string
const validateUpdateUser = Joi.object({
    firstName: Joi.string().trim().optional(),
    lastName: Joi.string().trim().optional(),
    hobby: Joi.string().trim().optional()
});

const validateUserId = Joi.object({
    id: Joi.number()
        .required()
        .messages({ // must be a valid number
            'number.base': 'Invalid input. Id must be a number.',
            'number.empty': 'Id cannot be empty.',
            'any.required': 'Id is mandatory.',
        }),
});

module.exports = {
    validateCreateUser,
    validateUpdateUser,
    validateUserId,
};