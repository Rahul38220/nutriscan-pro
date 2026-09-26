import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

def train_crop_recommender():
    print("🌿 Loading Soil & Crop Dataset...")
    df = pd.read_csv("ml-model/Crop_recommendation.csv")
    
    # Features (Inputs) & Target (Output Crop)
    X = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
    y = df['label']
    
    # Train-Test Split (80% training, 20% testing)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    print("🌲 Training Random Forest Classifier (100 Decision Trees)...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Evaluate
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    
    print(f"✅ Model Training Complete! Accuracy: {acc * 100:.2f}%\n")
    
    # Test a sample prediction with named columns to avoid warnings
    sample_soil = pd.DataFrame([[90, 42, 43, 20.8, 82.0, 6.5, 202.9]], 
                               columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
    prediction = model.predict(sample_soil)
    print(f"🔮 Sample Soil Reading Prediction: Recommended Crop -> '{prediction[0].upper()}'")

if __name__ == "__main__":
    train_crop_recommender()
