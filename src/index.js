const helper = require("./helper");
const errors = require("./errors.js");
const httpErrors = {};

const errorBuilder = (options) => {
  return class HttpError extends Error {
    constructor(message = "") {
      super();

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, HttpError);
      }

      this.date = helper.getFullDate();
      this.isHttpError = true;
      this.message = message || options.message;
      this.statusCode = options.statusCode;
      this.name = options.name;
    }
  };
};

errors.forEach((error) => {
  httpErrors[error.alias] = errorBuilder(error);
});

module.exports = httpErrors;
