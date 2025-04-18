const userService = require('../services/user.service');

// This is our controller which is responsible for routes handler
// GET /users
const getAllUsers = (req, res) => {
    const response = userService.getUsers();
    res.status(response.status).json(response);
};

// GET /users/:id
const getUserById = (req, res) => {
    const { id } = req.params;
    const response = userService.getUser(id);
    res.status(response.status).json(response);
};

// POST /user
const createUser = async (req, res) => {
    const payload = req.body;
    const response = await userService.addUser(payload);
    res.status(response.status).json(response);
};

// PUT /user/:id
const updateUser = (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const response = userService.updateUser(id, payload);
    res.status(response.status).json(response);
};

// DELETE /user/:id
const deleteUser = (req, res) => {
    const { id } = req.params;
    const response = userService.deleteUser(id);
    res.status(response.status).json(response);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};