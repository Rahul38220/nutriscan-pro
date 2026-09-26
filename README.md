# NutriScan Pro: Integrated IoT Soil Analysis & Farmer Dashboard
**Hardware • Web-Bluetooth • Predictive Machine Learning • Multilingual Agri-Tech**

## 📌 Overview
NutriScan Pro is an autonomous IoT and machine learning ecosystem designed to provide local farmers with real-time soil health analytics and predictive crop recommendations. By leveraging **Web Bluetooth (BLE) GATT protocols**, the system establishes a direct, secure connection between hardware sensors and a mobile dashboard—eliminating cloud infrastructure dependencies for remote areas. A secondary **Random Forest ML layer** analyzes environmental and soil telemetry to predict optimal crop selection.

## 🚀 Key Features
- **IoT Sensor Node:** Custom ESP32 hardware sampling soil moisture, EC (electrical conductivity), and pH levels via analog-to-digital conversion.
- **Bridge Layer:** Native Web-Bluetooth interface subscribing to the ESP32’s GATT characteristics for dynamic, low-latency telemetry streaming.
- **Predictive ML Recommender:** Scikit-Learn Random Forest Classifier trained on 2,200+ soil telemetry samples, achieving **99% accuracy** in crop suitability classification.
- **Multilingual Application Layer:** React-based dashboard decoding raw sensor payloads into localized actionable insights across **English, Hindi, and Gujarati**.

## 🛠 Tech Stack
- **Hardware & Firmware:** ESP32, Capacitive Moisture Sensors, pH/EC probes, C++ (Arduino/ESP32 BLEServer GATT).
- **Machine Learning:** Python, Scikit-Learn (Random Forest), Pandas, NumPy.
- **Frontend & App:** React (TypeScript), Web Bluetooth API.
- **Localization:** Dictionary-based dynamic translation engine.

## 📁 Repository Structure

```text
nutriscan-pro/
├── hardware/        # C++ Firmware for ESP32/Arduino sensor nodes
├── ml-model/        # Scikit-Learn Random Forest model script & soil dataset
├── website/         # Product showcase & landing page
├── mobile-app/      # React mobile dashboard application
└── assets/          # Hardware schematics & architecture diagrams
```

## 📊 System Architecture & Flow
1. **BLE Advertising:** ESP32 advertises as `SoilSense-ESP32` via BLE GATT.
2. **Handshake:** Mobile web dashboard discovers the node and subscribes to characteristics.
3. **Telemetry Snapshot:** Transmits raw 3-byte payload `[moisture, ec, pH]` for client decoding.
4. **ML Recommendation:** Soil data is evaluated against the trained Random Forest classifier (`N, P, K, pH, temp, humidity, rainfall`) to recommend target crops with optimal yield potential.
5. **Localized Dashboard:** Output translates into the farmer's target language (English, Hindi, or Gujarati).

## ⚙️ Running the ML Recommender Locally

1. **Set up virtual environment & install dependencies:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install pandas scikit-learn

2. **Train & evaluate the Random Forest model:**
    ```bash
    python3 ml-model/train_recommender.py
