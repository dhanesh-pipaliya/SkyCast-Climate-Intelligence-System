import joblib
import pandas as pd

model = joblib.load("model.pkl")

# Use DataFrame instead of list
day = pd.DataFrame({"day": [11]})

prediction = model.predict(day)

print(f"Predicted Temperature: {prediction[0]:.2f}°C")