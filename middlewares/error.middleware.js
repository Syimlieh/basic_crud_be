import { logger } from "../log/logger.js";
import { STATUS_MESSAGE } from "../utils/constants.js";

// this will be our global error handler and will be used as a middleware after our routes
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  logger.error(
    `${req.method} ${req.originalUrl} | ${statusCode} | ${err.message}`
  );

  // Respond with a structured error message
  res.status(statusCode).json({
    statusCode,
    message: err.message || STATUS_MESSAGE[500],
    ...(process.env.NODE_ENV === 'development' && { detail: err?.details?.message }),
    // for development we can returned the detail of the error that will be coming from our AppError that capture our actual error
  })
};

export default errorHandler;