const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./log/logger");
const { errorHandler } = require("./middlewares/error.middleware");
const httpLogger = require("./log/http.logger");

//dotenv
require("dotenv").config();

const app = express();

// CORS
app.use(cors());

app.use(httpLogger)

// JSON Parsing
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

app.use(helmet());

// Routes
require("./routes")(app);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    logger.info(`Backend Server running on PORT: [${PORT}]`);
});
