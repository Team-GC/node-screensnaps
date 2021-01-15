# node-screensnaps

![Build](https://github.com/Team-GC/node-screensnaps/workflows/CI/badge.svg)

A simple NodeJS library to interact with the APIs for screenshot generation on screensnaps.io. **Please note that this library requires a back-end server (nodejs), as screensnaps.io does not support CORS from the client side.**

# Installation

`npm install node-screensnaps`

or

`yarn add node-screensnaps`

# Documentation

To get stared, you'll need an `api_key` and `user_id` to make requests, you can sign up for free at https://screensnaps.io.

## Initializing the Library

```js
const screensnapsIO = require('node-screensnaps')
```

OR

```js
import * as screensnapsIO from "node-screensnaps"
```

## Methods

Refer to the documentation on https://screensnaps.io/docs/intro on how to make certain calls.

## Promises

By default, this library uses promises, you can invoke them as via `await`, but remember to handle your own errors via `try / catch`. Example below use `async/await`, however can be written as a true promise.

### `screenshots`

This will get the last 15 screenshots on your account.

```js
const snaps = await screensnapsIO.screenshots({
    userId: "USER_ID",
    apiKey: "API_KEY"
});
```

### `screenshot`

This will take a screenshot to a URL or HTML depending on your params

```js
const snap = await screensnapsIO.screenshot({
    userId: "USER_ID",
    apiKey: "API_KEY"
}, {
    url: "https://google.com"
});
```

See https://screensnaps.io/docs/api-post-screenshot for additional parameters.

### `stats`

This is a ping to let you know the status of the service.

```js
const status = await screensnapsIO.status({
    userId: "USER_ID",
    apiKey: "API_KEY"
});
```

## Testing

You can run `npm run test` to run then test. Make sure to create a local `.env` file with the contents of:

```bash
USER_ID=XXXX
API_KEY=XXXX
```

You can pull these from dashboard at https://screensnaps.io
