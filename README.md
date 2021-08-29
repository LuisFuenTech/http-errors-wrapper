# HTTP Errors Wrapper

This module allows you to throw custom and specific http-errors when handling server responses in your NodeJS APIs.

# Compatibility

The minimum supported version of Node.js is v8.

# Usage

## Installation

```
npm i http-errors-wrapper
```

## Test

Run from the root folder:

```
npm run test
```

## Importing

```
const HttpErrors = require('http-errors-wrapper');
```

## Example

```
const HttpErrors = require('http-errors-wrapper');

try {
    HttpErrors.notFoundError('User not found');
}
catch(error) {
    if(error.isHttpError){
        const { statusCode, message } = error;
        return res.status(statusCode).send({ statusCode, message });
    }
}

```

## Error Object

Each http error from this module has:

- `date`: Date when the error where thrown with format `YYYY-MM-DD HH:mm:ss`
- `isHttpError`: Flag to indicate the error belongs to this module in order to handle it
- `message`: Custom message to send with the error. A short description to resume what happened. By default is the error name provided by [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- `name`: The default http error name
- `statusCode`: The default http status code
- `stack`: Error stack trace where was thrown

## Methods

- `badRequestError`: Handles 400 http error
- `unauthorizedError`: Handles 401 http error
- `forbiddenError`: Handles 403 http error
- `notFoundError`: Handles 404 http error
- `methodNotAllowedErrorError`: Handles 405 http error
- `conflictError`: Handles 409 http error
- `unsupportedMediaTypeError`: Handles 415 http error
- `internalServerError`: Handles 500 http error
- `badGatewayError`: Handles 502 http error

# License

[MIT](https://github.com/LuisFuenTech/http-errors-wrapper/blob/master/LICENSE)
