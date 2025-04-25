import mongoose from "mongoose";
import { COLLECTIONS } from "../utils/constants.js"

// here we are creating a new mongo schema for our User collection
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    hobby: [{
        type: String,
        trim: true,
        required: true,
    }]
}, {
    timestamps: true
})

const Users = mongoose.model(COLLECTIONS.USERS, UserSchema);

export default Users;