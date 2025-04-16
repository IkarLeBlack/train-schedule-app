# 🚆 Train Schedule App – Fullstack Project

A fullstack web application for managing and viewing train schedules. The project includes:

- A **backend** built with **NestJS**, **Prisma**, **PostgreSQL**, and **JWT authentication**
- A **frontend** built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**

---

## 📁 Project Structure

```
train-schedule-app/
├── backend/                # NestJS + Prisma API
├── frontend/               # Next.js + Tailwind CSS app
```

---

## 🌐 Live Features

### ✅ Backend (NestJS)
- User registration and login
- JWT-based authentication
- Train CRUD operations (create, read, delete)
- Modular NestJS architecture with Prisma ORM

### ✅ Frontend (Next.js)
- Authenticated routes with session via `localStorage`
- Responsive interface styled with Tailwind CSS
- Forms for adding/editing train data
- Protected routes with automatic redirect to login

---

## ⚙️ Technologies

| Area        | Tech Stack                                       |
|-------------|--------------------------------------------------|
| **Backend** | NestJS, Prisma ORM, PostgreSQL, JWT, TypeScript  |
| **Frontend**| Next.js 14, React 18, Tailwind CSS, TypeScript   |

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js >= 18
- PostgreSQL (or any Prisma-supported DB)

---

## 🛠️ Backend Setup (`/backend`)

```bash
cd backend
npm install
```

### Create `.env` file

```env
DATABASE_URL=postgresql://user:password@localhost:5432/train_db
JWT_SECRET=your_jwt_secret
```

### Prisma setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### Run server

```bash
npm run start:dev
```

API will be available at `http://localhost:3001`

---

## 💻 Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
```

> Optionally, create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Run development server

```bash
npm run dev
```

App runs at `http://localhost:3000`

---

## 🔐 Authentication Flow

- Users register or log in to receive a JWT token
- Token is stored in `localStorage`
- Protected pages (`/trains`) require a valid token
- All requests include `Authorization: Bearer <token>` header

---

## 🛣️ API Routes Overview

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | `/auth/register` | Register new user            |
| POST   | `/auth/login`    | Authenticate and get token   |
| GET    | `/trains`        | Get all train records        |
| POST   | `/trains`        | Create new train             |
| DELETE | `/trains/:id`    | Delete train by ID           |
| GET    | `/users`         | Get all users (admin use)    |

---

## 📱 UI Pages Overview

| Page        | Route       | Access         | Description                    |
|-------------|-------------|----------------|--------------------------------|
| Home        | `/`         | Public         | Welcome & navigation           |
| Login       | `/login`    | Public         | User login form                |
| Register    | `/register` | Public         | User registration              |
| Train List  | `/trains`   | Authenticated  | Manage trains (CRUD UI)        |

---

## 📋 Scripts Summary

### Backend

```json
"start:dev": "nest start --watch",
"prisma:generate": "prisma generate",
"prisma:migrate": "prisma migrate dev"
```

### Frontend

```json
"dev": "next dev",
"build": "next build",
"start": "next start"
```

---

## 📄 License

MIT License


