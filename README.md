# streddit

## Prerequisites

Make sure the following are installed:
* Python 3.*
* Anaconda
* MongoDB
* Node.js

## Streaming

To retrieve Reddit comments, rename `config.cfg.example` to `config.cfg` and add the
necessary credentials and configuration. Install the required Python packages using
`conda env update --file environment.yml`.

Run the script to consume the Reddit comment stream:

```sh
python streaming/reddit.py
```

## Server

To run the rest API using Express, change to the `app` directory.

Install the app using `npm install`.

Once installed, run the API:

```sh
node app.js
```