# 🌍 SkyCast Climate Intelligence System

An AI-powered climate analysis and weather prediction system built using FastAPI, React, and Machine Learning.

---

## 🚀 Features

- 🌦 Real-time weather data using OpenWeather API  
- 🤖 AI-based temperature prediction (Machine Learning)  
- 📊 Interactive charts for climate trends  
- 🌐 Full-stack application (React + FastAPI)  
- ☁ Cloud-ready architecture (Azure)

---

## 🧠 Technologies Used

- Frontend: React.js  
- Backend: FastAPI (Python)  
- Machine Learning: Scikit-learn  
- Data Visualization: Chart.js  
- API: OpenWeather API  
- Cloud: Microsoft Azure  

---

## 📊 Project Workflow

1. Fetch real-time weather data  
2. Process and display data  
3. Predict future temperature using ML model  
4. Visualize results using charts  

---

## 📸 Screenshots

### Home
![Home](frontend/public/screenshots/home.png)

### Weather Data
![Weather](frontend/public/screenshots/weather.png)

### Prediction
![Prediction](frontend/public/screenshots/prediction.png)

---

## ⚙️ How to Run

### Backend
```bash
cd backend
venv\Scripts\activate
python -m uvicorn main:app --reload
cd frontend
npm install
npm start