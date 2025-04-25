// I personally like to do this in controller instead of destructure each function because i sometimes use the same name for both controller and service. this allow me to reuse the name without any issue
import * as UserService from "../services/user.service.js";

// purpose of controller is to handle the routes so i moved the logic to service and input validation seperately as a middeware

// GET /users
export const getAllUsers = async (req, res, next) => {
    try {
        const response = await UserService.getUsers(req.query);
        return res.status(response.statusCode).json(response);
    } catch (err) {
        // this error is passed to our error handler. 
        next(err);
        // another option is by directly returned the res here too. this works too 
    }
};

// GET /user/:id
export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await UserService.getUser(id);
        return res.status(response.statusCode).json(response);
    } catch (err) {
        next(err);
    }
};

// POST /user
export const createUser = async (req, res, next) => {
    try {
        const payload = req.body;
        const response = await UserService.addUser(payload);
        return res.status(response.statusCode).json(response);
    } catch (err) {
        next(err);
    }
};

// PUT /user/:id
export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const response = await UserService.updateUser(id, payload);
        return res.status(response.statusCode).json(response);
    } catch (err) {
        next(err);
    }
};

// DELETE /user/:id
export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await UserService.deleteUser(id);
        return res.status(response.statusCode).json(response);
    } catch (err) {
        next(err);
    }
};
