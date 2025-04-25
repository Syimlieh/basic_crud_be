// using name export as we are exporting multiple function 
import {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
} from './controllers/user.controller.js';

import validator from "./validations/validator.js";

// getting ther server from our server.js
export default (server) => {
    // first here is the routes, then we add a validation middleware and then go to our routes handler which is our controller
    server.post("/user", validator("validateCreateUser"), createUser);

    server.get("/users", getAllUsers);

    // here we will validate object id so that it only accept Mongo Object Id 
    // true here mean we are validating the req params
    server.get("/user/:id", validator("validateObjectId", true), getUserById);

    // true mean for validating params and simple validation name means we are validating the req body
    server.put("/user/:id", validator("validateObjectId", true), validator("validateUpdateUser"), updateUser);

    // delete api and validate on id type
    server.delete("/user/:id", validator("validateObjectId", true), deleteUser);
};
