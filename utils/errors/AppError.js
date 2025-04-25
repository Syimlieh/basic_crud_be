// this will help us throw a consistence and structured error
// it is extended from the Native js Error
class AppError extends Error {
  constructor(message, details = null, statusCode = 500) {
    // call the parent constructor
    super(message);

    // custom status code
    this.statusCode = statusCode;

    // any extra detail about the actual error
    this.details = details;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
