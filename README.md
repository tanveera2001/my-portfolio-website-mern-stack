# 🍔 Famous Burger – MERN Stack Web App

A full-stack web application built with the **MERN stack (MongoDB, Express.js, React, Node.js)**.

This project demonstrates **authentication, CRUD operations, API integration, and responsive design**. It is designed for real-world usage, such as managing menu items and handling customer data.

---

## 📑 Table of Contents

- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📸 Screenshots](#-screenshots)
- [⚙️ Installation & Setup](#-installation--setup)
- [📡 API Endpoints](#-api-endpoints)
- [🌍 Deployment](#-deployment)
- [📌 Future Improvements](#-future-improvements)
- [👤 Author](#-author)

---

## 🚀 Features

- 🔐 **Authentication & Authorization** – Admin login and registration system (JWT / Sessions).  
- 🛒 **Menu Management** – Admin can create, update, delete menu items.  
- 🖼 **Image Uploads** – Save product images to the backend and store paths in MongoDB.  
- 📬 **Contact Form** – Users can send messages; data stored in the database and email notifications sent via SendGrid.  
- 📱 **Responsive UI** – Fully responsive with **Tailwind CSS**.  
- ☁️ **Deployed on Vercel / Render / Netlify**.

---

## 🛠 Tech Stack

**Frontend**

- React (Vite)  
- React Router  
- Axios  
- Tailwind CSS  

**Backend**

- Node.js + Express.js  
- MongoDB Atlas + Mongoose  
- Multer (for image uploads)  
- JWT (for authentication)  
- SendGrid (for email sending)  

---

## 📸 Screenshots

(Add some screenshots here, e.g., Home Page, Menu Page, Admin Dashboard)

---

## ⚙️ Installation & Setup

1. **Clone the repo**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Backend setup**

    ```bash
    cd server
    npm install
    npm start
    ```

    - Create a `.env` file inside `/server` with:

        ```env
        MONGODB_URI=your_mongodb_connection
        JWT_SECRET=your_secret_key
        SENDGRID_API_KEY=your_sendgrid_key
        FRONTEND_URL=http://localhost:5173
        ```

3. **Frontend setup**

    ```bash
    cd client
    npm install
    npm run dev
    ```

4. Open the app in your browser at:

    ```
    http://localhost:5173
    ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user |
| GET    | /api/items         | Get all menu items |
| POST   | /api/items         | Add new menu item (Admin) |
| PUT    | /api/items/:id     | Update menu item (Admin) |
| DELETE | /api/items/:id     | Delete menu item (Admin) |
| POST   | /api/contact       | Submit contact form |

---

## 🌍 Deployment

- **Frontend**: [Live Demo Link](https://your-frontend.vercel.app/)  
- **Backend API**: [API Link](https://your-backend.vercel.app/)

---

## 📌 Future Improvements

- ✅ Role-based admin & user dashboard  
- ✅ Pagination & search in menu  
- ✅ Email verification & password reset  
- ✅ Unit & integration testing (Jest/Mocha)

---

## 👤 Author

**Your Name**

- 📧 Email: [your-email@gmail.com](mailto:your-email@gmail.com)  
- 💼 LinkedIn: [your-linkedin-profile]  
- 💻 GitHub: [your-github-profile]
