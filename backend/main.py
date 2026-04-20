from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import joblib
import os
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "ca826bb501b4c7c0133d0c276e9093a4"  # 🔥 replace this

# 🔥 LOAD MODEL HERE (GLOBAL)
model_path = os.path.join(os.path.dirname(__file__), "..", "ml-model", "model.pkl")
model = joblib.load(model_path)


@app.get("/")
def home():
    return {"message": "SkyCast Backend Running 🚀"}

@app.get("/weather/{city}")
def get_weather(city: str):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    
    response = requests.get(url)
    data = response.json()

    if data.get("cod") != 200:
        return {"error": "City not found"}

    return {
        "city": city,
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "weather": data["weather"][0]["description"]
    }
    
@app.get("/predict-ml")
def predict_ml(day: int):
    input_data = pd.DataFrame({"day": [day]})
    prediction = model.predict(input_data)

    return {
        "day": day,
        "predicted_temperature": round(prediction[0], 2)
    }