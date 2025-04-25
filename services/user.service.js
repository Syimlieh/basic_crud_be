import { logger } from "../log/logger.js";
import Users from "../models/user.model.js";
import { STATUS_MESSAGE } from "../utils/constants.js";
import AppError from "../utils/errors/AppError.js";

// Our service will be handling all the business logic and saving to our db
export const addUser = async (user) => {
    try {
        const newUser = new Users(user);
        const addUser = await newUser.save();
        return {
            message: "User added successfully",
            statusCode: 201,
            data: addUser,
        };
    } catch (error) {
        logger.error(`Failed while saving Error => ${error.message}`)
        throw new AppError(STATUS_MESSAGE[500], error, error.statusCode || 500)
    }
}

export const getUsers = async () => {
    try {
        // this is a simple find that fetch all records without any pagination
        const users = await Users.find();

        return {
            statusCode: 200,
            message: 'Users fetch successfully.',
            data: users,
        }
    } catch (error) {
        logger.error(`Failed while fetching Error => ${error.message}`)
        throw new AppError(STATUS_MESSAGE[500], error, error.statusCode || 500)
    }
}

export const getUser = async (id) => {
    try {
        const user = await Users.findById(id);
        if (!user) {
            throw new AppError('User not found', user, 404)
        }
        return {
            statusCode: 200,
            message: 'User fetch successfully.',
            data: user,
        }
    } catch (error) {
        logger.error(`Failed while saving Error => ${error.message}`)
        if (error instanceof AppError) throw error;
        throw new AppError(STATUS_MESSAGE[500], error, error.statusCode || 500)
    }
}

export const updateUser = async (id, payload) => {
    try {
        const updateUser = await Users.findByIdAndUpdate(
            id,
            { $set: payload },
            { new: true }
        )
        if (!updateUser) {
            throw new AppError('Update is unsuccessfull, User not found.', updateUser, 404)
        }

        return {
            statusCode: 200,
            message: 'User updated successfully.',
            data: updateUser,
        };
    } catch (error) {
        logger.error(`Failed while saving Error => ${error.message}`);
        if (error instanceof AppError) throw error;
        throw new AppError(STATUS_MESSAGE[500], error, error.statusCode || 500)
    }
}

export const deleteUser = async (id) => {

    try {
        const deletedUser = await Users.findByIdAndDelete(id)
        if (!deletedUser) {
            throw new AppError('Delete unsuccessfull, User not found.', deletedUser, 404)
        }

        return {
            statusCode: 200,
            message: 'User deleted successfully.',
            data: deletedUser,
        };
    } catch (error) {
        logger.error(`Failed while saving Error => ${error.message}`);
        if (error instanceof AppError) throw error;
        throw new AppError(STATUS_MESSAGE[500], error, error.statusCode || 500)
    }
}
