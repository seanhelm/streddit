# streddit

## Prerequisites

Make sure the following are installed:
* Python 3.*
* Anaconda
* MongoDB
* Node.js

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

To start the API, change to the `api` directory and install the API 
using `npm install`.

Once installed, run the API:

```sh
node app.js
```

The API will make it easy to perform CRUD operations on the collection of Reddit comments.