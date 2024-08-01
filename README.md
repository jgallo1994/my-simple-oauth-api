# Simple OAuth API

This project is a simple API for authentication using JWT with Node.js, TypeScript, and Prisma.

## Features

- User registration
- User login
- Authentication with JWT

## Technologies Used

- Node.js
- Express
- TypeScript
- Prisma ORM
- MySQL (or any database supported by Prisma)
- JWT for authentication

## Project Setup

### Installation

1. Clone the repository:

```bash
    git clone https://git@github.com:jgallo1994/my-simple-oauth-api.git
    cd simple-oauth-api
```

2. Install dependencies:

```bash
npm install
Configure environment variables:
```

3. Create a .env file in the root of the project with the following variables:

```bash
    DATABASE_URL="mysql://user:password@localhost:3333/simple_oauth_api"
    JWT_SECRET=your-jwt-secret
    PORT=5000
```

4. Configure Prisma
   Initialize Prisma (if not already initialized):
   ```bash
     npx prisma init
   ```
   Apply migrations:
   ```bash
     npx prisma migrate dev --name init
   ```
   Generate the Prisma client:
   ```bash
     npx prisma generate
   ```
5. Running the Project
   Build the project:

   ```bash
     npm run build
   ```

   Start the server:

   ```bash
     npm start
   ```

6. Endpoints
   - POST /api/auth/register: Register a new user.
   - POST /api/auth/login: Log in with a registered user.
   - GET /api/auth/validate: Validate bearer token
