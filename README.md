# Http Error Handler

This module allows you to create an object to throw custom and specific http-errors when handling server responses in your nodejs APIs.

# Compatibility

The minimum supported version of Node.js is v8.

# Usage

## Installation

```
npm i http-error-handler
```

## Test
Run from the root folder:
```
npm run test
```

## Importing

```
const HttpError = require('http-error-handler');
```

## Example

```
const HttpError = require('/path/to/module');
const httpError = new HttpError();

try {
    httpError.notFound('User not found');
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

- `badRequest`: Handles 400 http error
- `unauthorized`: Handles 401 http error
- `forbidden`: Handles 403 http error
- `notFound`: Handles 404 http error
- `conflict`: Handles 409 http error
- `internalServerError`: Handles 500 http error

# License

[MIT](https://github.com/LuisFuenTech/http-error-handler/blob/master/LICENSE)
