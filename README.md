# URL Shortener

A simple and lightweight URL shortener built with **Node.js, Express, MongoDB, Mongoose, EJS, and Bootstrap**.

## Features

* Create short links from long URLs
* Store shortened URLs in MongoDB
* Track the number of clicks for each link
* View all shortened links on the main page
* Fast and lightweight

## Tech Stack

* **Node.js** — Runtime environment
* **Express.js** — Web framework
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **EJS** — Server-side templating
* **Bootstrap** — Frontend styling

## Requirements

Before running the application, make sure you have:

* Node.js installed
* MongoDB installed and running
* npm installed

The application connects to MongoDB using:

```text
mongodb://localhost/naWeCulture
```

> Make sure this database name matches the MongoDB connection string in `server.js`.

## Installation

### 1. Clone the repository

```bash
git clone URL_SHORTENER
```

### 2. Open the project folder

```bash
cd URL_SHORTENER
```

### 3. Install dependencies

```bash
npm install
```

## Run the Application

Start the development server with:

```bash
npm run dev
```

Then open your browser and visit:

```text
http://localhost:3000
```

## Project Structure

```text
URL/
├── models/
│   └── shortUrl.js
├── views/
│   └── index.ejs
├── server.js
├── package.json
├── README.md
└── .gitignore
```

## How It Works

1. Enter a long URL into the application.
2. The application generates a unique short code.
3. The long URL and short code are stored in MongoDB.
4. The short URL redirects users to the original URL.
5. Each visit increases the click counter.
6. All shortened URLs can be viewed from the main page.

## Example

A long URL such as:

```text
https://example.com/some/very/long/url
```

can be converted into:

```text
http://localhost:3000/abc123
```

When someone visits the short URL, they are redirected to the original URL and the click count is increased.

## Notes

* MongoDB must be running locally before starting the application.
* The short URL is generated using the `/:shortCode` route.
* Click counts are stored in MongoDB.
* The development command requires a corresponding `"dev"` script in `package.json`.
