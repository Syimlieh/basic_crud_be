const Users = [];

// Our service will be handling all the business logic
const addUser = async (user) => {
    const payload = {
        id: Users[Users.length - 1]?.id + 1 || 1, // generating increment id
        ...user,
    }
    Users.push(payload);
    return {
        message: 'User added successfully.',
        data: payload,
        status: 201
    }
}

const getUsers = () => {
    return {
        status: 200,
        message: 'Users fetch successfully.',
        data: Users,
    }
}

const getUser = (id) => {
    const userIndex = Users.find((item) => item.id === Number(id));
    if (!userIndex) {
        return {
            status: 404,
            message: 'User not found',
        }
    }
    return {
        status: 200,
        message: 'User fetch successfully.',
        data: userIndex,
    }
}

const updateUser = (id, payload) => {
    // find and update based on index 
    const userIndex = Users.findIndex((item) => item.id === Number(id))
    if (userIndex === -1) {
        return {
            status: 404,
            message: 'User not found.',
        }
    }

    Users[userIndex] = {
        ...Users[userIndex],
        ...payload,
    };

    return {
        status: 200,
        message: 'User updated successfully.',
        data: Users[userIndex],
    };
}

const deleteUser = (id) => {
    const userIndex = Users.findIndex((item) => item.id === Number(id))
    if (userIndex === -1) {
        return {
            status: 404,
            message: 'User not found.',
        }
    }

    const deleted = Users.splice(userIndex, 1);

    return {
        status: 200,
        message: 'User deleted successfully.',
        data: deleted[0],
    };
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}