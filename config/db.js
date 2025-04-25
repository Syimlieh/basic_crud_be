import mongoose from "mongoose";
import { logger } from "../log/logger.js";
import Users from "../models/user.model.js";
import UserJson from "../utils/seeding/users.js"

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    // this will be our connection string. we are getting it from our .env
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      throw new Error("MongoDB connection string not provided");
    }
    logger.info("Connecting to Database...");
    await mongoose.connect(MONGO_URI, {
      authSource: "admin",
    });

    mongoose.connection.on('connected', () => {
      logger.info('MongoDB connected');
    });

    logger.info("Connected to Database");

    // Seeding some dummy data as suggested from last assignment
    const checkUserExist = await Users.findOne({});
    if (!checkUserExist) {
      const addExist = await Users.insertMany(UserJson)
      if (addExist.length) {
        logger.info("User info seeding successfully")
      }
    }
  } catch (err) {
    logger.error("Failed to connect to Database:\n" + err);
    throw err;
  }
};

export default connectDB;
