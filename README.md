# CRUD IAM Dashboard Backend

A backend service for an Identity-and-Access-Management (IAM) Dashboard with support for user management, authentication, role-based access control (RBAC), and health appointments.

---

## 🛠 Tech Stack

- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB with Mongoose
- **Auth**: JWT + Bcrypt
- **Validation**: Joi
- **Testing**: Jest + Supertest

---

## 🚀 Features

- ✅ User CRUD (IAM + Health fields)
- ✅ Authentication with JWT
- ✅ Role-Based Access Control (RBAC)
- ✅ Appointments (bonus feature)
- ✅ Joi Validation
- ✅ Unit and Integration Tests

---

## 📁 Project Structure

src/
├── models/ # Mongoose schemas
├── controllers/ # Request handlers
├── routes/ # Express routers
├── middlewares/ # Auth, RBAC, validation
├── utils/ # Helpers (JWT, hashing)
├── validators/ # Joi schemas
├── config/ # MongoDB connection
├── app.ts
├── server.ts
tests/ # Unit & integration tests


---

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/slamas559/IAM-CRUD.git
cd crud_backend
```
### Install Dependencies
 - npm install
---
### Create a .env file
 - I pushed the .env files with it in other to be able to access the mongodb database url easily, I know am not supposed to.
---
### Run in app in dev mode
 - npm run dev
---
### Run test
 - npm run test
---
## API Examples via cURL 

 ### Login
 curl -X POST http://localhost:5000/auth/login \
 -H "Content-Type: application/json" \
 -d '{"email": "admin@example.com", "password": "admin123"}'

 ### Create User
 curl -X POST http://localhost:5000/items \
 -H "Authorization: Bearer <token>" \
 -H "Content-Type: application/json" \
 -d '{"username": "john", "email": "john@example.com", "passwordHash": "pass1234", "roles": ["user"]}'
 
 ### Create appointments
 curl -X POST http://localhost:5000/appointments \
 -H "Authorization: Bearer <token>" \
 -H "Content-Type: application/json" \
 -d '{"date": "2025-07-20T10:00:00Z", "reason": "Routine checkup"}'

---

## Postman Collection
### You can create and export a Postman collection with:
- POST /auth/login
- GET /auth/profile
- POST /items, GET /items, etc.
- POST /appointments, GET /appointments?userId=...

---

### Migrations
No migrations are required with MongoDB; schema is defined via Mongoose models.

---

### ✅ Tests
Includes:
- 5+ unit tests (utils, validators)
- 2+ integration tests (routes)

