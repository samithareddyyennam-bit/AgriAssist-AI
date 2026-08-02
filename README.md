# 🌾 AgriAssist AI

AgriAssist AI is an AI-powered smart farming web application designed to help farmers make informed decisions. The application provides crop recommendations based on soil type and season, weather information, disease detection, and a modern dashboard for better farm management.

---

## 🚀 Features

- 🌾 AI Crop Recommendation
- 🌤 Real-time Weather Forecast
- 🦠 Disease Detection
- 📊 Interactive Dashboard
- 🌱 Smart Farming Tips
- 🔍 Search Crops
- ➕ Add New Crops
- ✏ Update Crop Information
- 🗑 Delete Crop Records
- 💾 Persistent Database Storage using Supabase
- 🌙 Dark Mode Support
- ⚡ Responsive Design
- 🔔 Toast Notifications
- 📞 Contact Page


---

## 🛠 Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL
- Supabase

## APIs
- OpenWeather API

---

## 📂 Project Structure

```
AgriAssist-AI
│
├── frontend
│   ├── app
│   ├── components
│   ├── public
│   └── package.json
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── routes
│   │   ├── cropRoutes.js
│   │   ├── weatherRoutes.js
│   │   ├── diseaseRoutes.js
│   │   └── authRoutes.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
└── README.md
```

---

## ⚙ Installation

### Clone the Repository

```bash

```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```
PORT=5000

DATABASE_URL=your_supabase_database_url

WEATHER_API_KEY=your_weather_api_key
```

Create a `.env.example` file with placeholder values before pushing your project to GitHub.


## 🌐 Local URLs

Frontend

```
http://localhost:3000
```

Backend

```
http://localhost:5000
```

---

## 📷 Screenshots

- 🏠 Home Page
- 📊 Dashboard
- 🌾 Crop Recommendation
- 🌤 Weather Page
- 🦠 Disease Detection
- ➕ Add Crop
- ✏ Update Crop
- 🗑 Delete Crop


(Add screenshots after uploading them.)

---

# 🗄 Database

This project uses **PostgreSQL** hosted on **Supabase**.

### Why Supabase?

- Free cloud PostgreSQL database
- Reliable and secure
- Persistent cloud storage
- Easy integration with Node.js
- Supports full CRUD operations

# 📊 Database Schema

### Table: `crops`

| Column | Type | Description |
|---------|------|-------------|
| id | Integer (Primary Key) | Crop ID |
| name | Text | Crop Name |
| soil | Text | Soil Type |
| season | Text | Growing Season |
| water | Text | Water Requirement |
| fertilizer | Text | Recommended Fertilizer |
![Database Schema](images/schema.png)

# 🔄 CRUD Operations

The application supports complete CRUD operations.

- ✅ Create – Add new crops
- ✅ Read – Display crop information
- ✅ Update – Modify crop details
- ✅ Delete – Remove crop records

All data is stored permanently in the Supabase PostgreSQL database.

## Live Deployment

Frontend:
https://agri-assist-ai-self.vercel.app

Backend:
https://agriassist-ai-t6bf.onrender.com

### Tech Stack
- Next.js
- React
- Node.js
- Express
- PostgreSQL
- Render
- Vercel

### Known Limitations
- Render free tier may sleep after inactivity.
- First request can take 30–60 seconds.
- Google OAuth login is currently under configuration.


## 👩‍💻 Developer

**Samitha Reddy**
AI-Assisted Full Stack Web Development Intern

---

## 📄 License

This project is developed for educational and internship purposes.

