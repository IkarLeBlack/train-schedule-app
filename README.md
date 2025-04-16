# 🚆 Train Schedule App – Backend

This is the backend of the **Train Schedule App**, built with [NestJS](https://nestjs.com/) and [Prisma ORM](https://www.prisma.io/). It provides user authentication with JWT, user management, and train schedule management.

## 📂 Project Structure

```
train-schedule-app/backend
├── prisma/                    # Prisma schema and migrations
├── src/
│   ├── controllers/           # REST API controllers (auth, trains, users)
│   ├── dto/                   # Data Transfer Objects (validation schemas)
│   ├── modules/               # NestJS modules
│   ├── services/              # Business logic and DB access
│   ├── strategies/            # JWT strategy
│   ├── main.ts                # App bootstrap
│   └── app.module.ts          # Root module
```

## ⚙️ Technologies Used

- **NestJS** – Progressive Node.js framework
- **Prisma** – Type-safe database ORM
- **PostgreSQL** (or any other supported DB via Prisma)
- **JWT** – JSON Web Token authentication
- **bcrypt** – Password hashing
- **TypeScript**

## 📦 Installation

```bash
git clone https://github.com/your-repo/train-schedule-app.git
cd train-schedule-app/backend
npm install
```

## 🔧 Configuration

Create a `.env` file in the `backend/` directory:

```env
DATABASE_URL="your-database-url"
JWT_SECRET="your-secret-key"
```

> Replace `your-database-url` with your PostgreSQL/MySQL connection string.

## 🛠️ Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## 🚀 Run the Application

```bash
npm run start:dev
```

The server will run on `http://localhost:3000`.

## 🛡️ API Endpoints

### Auth

- `POST /auth/register` – Register new user
- `POST /auth/login` – Login and get JWT token

### Trains

- `POST /trains` – Create a new train
- `GET /trains` – Get all trains
- `GET /trains/:id` – Get train by ID
- `DELETE /trains/:id` – Delete a train

### Users

- `GET /users` – Get all users
- `GET /users/:id` – Get user by ID

## 🧪 Scripts

```json
"scripts": {
  "start": "nest start",
  "start:dev": "nest start --watch",
  "build": "nest build",
  "format": "prettier --write \"src/**/*.ts\"",
  "lint": "eslint \"src/**/*.ts\" --fix",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev"
}
```

