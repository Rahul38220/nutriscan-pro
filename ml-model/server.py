from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib # or we can reload/fit directly, or save the model pkl

app = FastAPI(title="NutriScan Pro ML API")

# Enable CORS so your React app can talk to it locally
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SoilInput(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

# Load or train model on startup (or load from saved pkl)
import train_recommender
# For now, let's train/load directly from your script
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
from sklearn.model_selection import train_test_split

df = pd.read_csv("ml-model/Crop_recommendation.csv")
X = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
y = df['label']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

@app.post("/predict")
def predict_crop(data: SoilInput):
    input_df = pd.DataFrame([[
        data.N, data.P, data.K, 
        data.temperature, data.humidity, 
        data.ph, data.rainfall
    ]], columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
    
    prediction = model.predict(input_df)
    probability = model.predict_proba(input_df).max()
    
    return {
        "recommended_crop": prediction[0].upper(),
        "confidence": float(probability)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
