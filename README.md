# NutriScan Pro: Integrated IoT Soil Analysis & Farmer Dashboard
**Hardware • Web-Bluetooth • Multilingual Agri-Tech**

## 📌 Overview
NutriScan Pro is an autonomous IoT ecosystem designed to provide farmers with real-time soil health analytics. By leveraging **Web Bluetooth (BLE) GATT protocols,** the system establishes a direct, secure connection between hardware sensors and a mobile dashboard—eliminating the need for cloud infrastructure and ensuring reliable operation in remote areas with limited connectivity.

## 🚀 Key Features
- **IoT Sensor Node:** Custom hardware for real-time soil nutrient and moisture monitoring.
- **Hardware Layer:** An ESP32 sensor node samples soil moisture, EC (electrical conductivity), and pH levels using analog-to-digital conversion.
- **Bridge Layer:** A native Web-Bluetooth interface acts as the central gateway, subscribing to the ESP32’s GATT characteristics for immediate, low-latency data snapshots.
- **Application Layer:** A React-based interface decodes raw 3-byte sensor payloads and maps them to localized, actionable insights in English, Hindi, and Gujarati.

## 🛠 Tech Stack
- **Hardware:** ESP32, Capacitive Soil Moisture Sensors, pH/EC probes.
- **Firmware:** C++ (Arduino/ESP32) utilizing 'BLEServer/' and 'BLECharacteristic/' for GATT communication.
- **Frontend:** React (TypeScript) with **Web Bluetooth API** for native browser-hardware integration.
- **Localization:** Custom dictionary mappings and dynamic threshold configuration for crop-specific recommendations.

## 📁 Repository Structure
- `hardware/`: Firmware for the ESP32/Arduino sensor nodes.
- `website/`: Code for the website displaying the product.
- `mobile-app/`: Mobile application source code.
- `assets/`: Schematic diagrams and system architecture visuals.

## 📊 System Flow
- **Advertising:** The ESP32 node advertises as "SoilSense-ESP32" via BLE.
- **Handshake:** The mobile dashboard discovers the device and initiates a secure GATT service connection.
- **Snapshot:** Upon subscription, the hardware transmits a raw 3-byte payload '[moisture, ec, pH]/' which is decoded locally by the application.
- **Insight:** The dashboard calculates fertilizer requirements based on the selected crop and displays results in the farmer's native language.
