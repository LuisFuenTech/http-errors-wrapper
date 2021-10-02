module.exports = [
  {
    name: 'BadRequestError',
    alias: 'badRequestError',
    statusCode: 400,
    message: 'Bad Request',
  },
  {
    name: 'UnauthorizedError',
    alias: 'unauthorizedError',
    statusCode: 401,
    message: 'Unauthorized',
  },
  {
    name: 'ForbiddenError',
    alias: 'forbiddenError',
    statusCode: 403,
    message: 'Forbidden',
  },
  {
    name: 'NotFoundError',
    alias: 'notFoundError',
    statusCode: 404,
    message: 'Not Found',
  },
  {
    name: 'MethodNotAllowedError',
    alias: 'methodNotAllowedError',
    statusCode: 405,
    message: 'Method Not Allowed',
  },
  {
    name: 'RequestTimeoutError',
    alias: 'requestTimeoutError',
    statusCode: 408,
    message: 'Request Timeout',
  },
  {
    name: 'ConflictError',
    alias: 'conflictError',
    statusCode: 409,
    message: 'Conflict',
  },
  {
    name: 'UnsupportedMediaTypeError',
    alias: 'unsupportedMediaTypeError',
    statusCode: 415,
    message: 'Unsupported Media Type',
  },
  {
    name: 'InternalServerError',
    alias: 'internalServerError',
    statusCode: 500,
    message: 'Internal server error',
  },
  {
    name: 'NotImplementedError',
    alias: 'notImplementedError',
    statusCode: 501,
    message: 'Not Implemented',
  },
  {
    name: 'BadGatewayError',
    alias: 'badGatewayError',
    statusCode: 502,
    message: 'Bad Gateway',
  },
  {
    name: 'ServiceUnavailableError',
    alias: 'serviceUnavailableError',
    statusCode: 503,
    message: 'Service Unavailable',
  },
];
