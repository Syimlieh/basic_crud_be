const express = require('express');
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/user.controller');

const validator = require("../validations/validator");

const router = express.Router();

// using the validator for validating both req body and params 
router.post("/", validator("validateCreateUser"), createUser);

router.get("/", getAllUsers);

// true here will validate the params
router.get("/:id", validator("validateUserId", true), getUserById);

router.put("/:id", validator("validateUserId", true), validator("validateUpdateUser"), updateUser);

router.delete("/:id", validator("validateUserId", true), deleteUser);

module.exports = router;
