const logger = require('../log/logger');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  logger.error(
    `${req.method} ${req.originalUrl} | ${statusCode} | ${err.message}`
  );

  // Respond with a structured error message
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  })
};

module.exports = { errorHandler };