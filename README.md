# streddit

## Prerequisites

Make sure the following are installed:

- Python 3.\*
- Anaconda
- MongoDB
- Node.js

## Streaming

Change to the `streaming` directory. To retrieve Reddit comments, rename
`config.cfg.example` to `config.cfg` and add the necessary credentials and configuration.
Install the required Python packages using `conda env update --file environment.yml`.

Run the script to consume the Reddit comment stream:

```sh
python reddit.py
```

This will process real-time comments and use sentiment analysis to store negative
comments in a MongoDB collection.

## API

To start the API, change to the `api` directory and install the API using `npm install`.

Once installed, run the API:

```sh
node app.js
```

The API will serve as the bridge between the MongoDB collection and the client.

## Client

This will allow the user to review and delete comments from the local cache.

To install and run, perform the following commands:

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
