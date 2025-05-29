# Kraken Backend API

This repository contains a simple Express.js REST API using Sequelize with a MySQL database. It provides basic authentication and post management endpoints.

## Features

- User registration and login with JWT authentication
- Sequelize models for `User` and `Post`
- Sample post routes (CRUD skeleton)

## Prerequisites

- Node.js >= 18
- MySQL server

## Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Configure your environment variables. You can copy the existing `.env` file as an example:

```env
JWT_SECRET=<your-secret>
JWT_EXPIRES_IN=7d
NODE_ENV=development
PORT=5000
DB_HOST=<database-host>
DB_USER=<database-user>
DB_PASSWORD=<database-password>
DB_NAME=<database-name>
```

3. Start the server in development mode:

```bash
npm run dev
```

The server will attempt to connect to the MySQL database and then listen on the port specified by `PORT`.

## API Endpoints

### Test Route

- `GET /` – returns a simple greeting JSON.

### Authentication

- `POST /api/auth/register` – register a new user. Requires `name`, `email` and `password` in the request body.
- `POST /api/auth/login` – login an existing user. Requires `email` and `password` in the request body. Returns a JWT token.

### Posts

The post routes are currently stubs and return mock data.

- `GET /api/posts` – get all posts.
- `GET /api/posts/:id` – get a post by id.
- `POST /api/posts` – create a new post (placeholder implementation).
- `PUT /api/posts/:id` – update a post (placeholder implementation).
- `DELETE /api/posts/:id` – delete a post (placeholder implementation).

## Example Usage

Register a user:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","password":"pass"}'
```

Login:

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","password":"pass"}'
```

The response will include a `token` that can be used in the `Authorization` header for protected routes.

## Testing

Currently the project does not include automated tests. To manually test the API you can use `curl` or any HTTP client (e.g., Postman) against the endpoints shown above.

When running locally, ensure your MySQL server is accessible with the credentials provided in your `.env` file.

