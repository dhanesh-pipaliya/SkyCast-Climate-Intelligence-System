from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "SkyCast Backend Running 🚀"}

@app.get("/predict")
def predict():
    return {
        "temperature_prediction": 32,
        "rain_probability": "65%"
    }