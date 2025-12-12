# 🚀 Project Backend (Node.js + Express)

This is the backend service for the project, built using **Node.js**, **Express**, and **MongoDB** (or any DB you use).

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB / Prisma / Mongoose
- JWT Authentication
- dotenv

---

## 📂 Project Structure
backend/
│── src/
│ ├── controllers/
│ ├── routes/
│ ├── middlewares/
│ ├── models/
│ ├── utils/
│ └── server.js
│
│── .env
│── .gitignore
│── package.json
│── README.md



## ⚙️ Environment Variables
Create a `.env` file in root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
