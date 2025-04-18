const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./log/logger");
const { errorHandler } = require("./middlewares/error.middleware");
const httpLogger = require("./log/http.logger");

//dotenv for accessing env 
require("dotenv").config();

const app = express();

// CORS we can whitelist only specific ip inside cors if required
app.use(cors());

// logging request 
app.use(httpLogger)

// JSON Parsing
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

// security
app.use(helmet());

// Routes
require("./routes")(app);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

// start and listening to our server
app.listen(PORT, () => {
    logger.info(`Backend Server running on PORT: [${PORT}]`);
});
