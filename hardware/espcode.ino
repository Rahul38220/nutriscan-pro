#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

// ===================== CONFIG =====================
#define MOISTURE_PIN 32
#define EC_PIN       33
#define PH_PIN 34

#define SAMPLES 10
#define READ_DELAY 50

// BLE UUIDs (MUST MATCH WEB APP)
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

// ===================== GLOBALS =====================
BLECharacteristic *pCharacteristic;
bool deviceConnected = false;
bool sentOnce = false;   // 🔑 IMPORTANT

// ===================== BLE CALLBACK =====================
class MyServerCallbacks : public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
    sentOnce = false;    // reset for new connection
    Serial.println("📱 Device connected");
  }

  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
    sentOnce = false;
    Serial.println("❌ Device disconnected");

    delay(100);                  // allow BLE stack to settle
    BLEDevice::startAdvertising();
    Serial.println("📢 Advertising restarted");
  }
};

// ===================== CHARACTERISTIC CALLBACK =====================
class MyCharacteristicCallbacks : public BLECharacteristicCallbacks {
  void onSubscribe(
    BLECharacteristic* characteristic,
    uint16_t subValue
  ) {
    Serial.println("📡 Notifications ENABLED by client");
    sentOnce = false;   // 🔑 allow snapshot only AFTER subscribe
  }
};

// ===================== SETUP =====================
void setup() {
  Serial.begin(115200);

  pinMode(MOISTURE_PIN, INPUT);
  pinMode(EC_PIN, INPUT);
  pinMode(PH_PIN, INPUT);

  BLEDevice::init("ESP32-SoilSensor");

  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  BLEService *pService = pServer->createService(SERVICE_UUID);

  pCharacteristic = pService->createCharacteristic(
    CHARACTERISTIC_UUID,
    BLECharacteristic::PROPERTY_NOTIFY
  );

  pCharacteristic->addDescriptor(new BLE2902());
  pCharacteristic->setCallbacks(new MyCharacteristicCallbacks());
  pService->start();

  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->start();

  Serial.println("🚀 BLE advertising started");
}

// ===================== HELPERS =====================
int moisturePercent(int raw) {
  raw = constrain(raw, 1500, 3500);
  return map(raw, 3500, 1500, 0, 100);
}

int ecValue(int raw) {
  if (raw < 120) return 0;

  raw = constrain(raw, 120, 2900);
  return map(raw, 120, 2900, 0, 100);
}

float readPH(int raw) {
  float voltage = (raw / 4095.0) * 3.3;
  float pH = 7.0 + ((2.5 - voltage) / 0.18);
  return constrain(pH, 0.0, 14.0);
}

// ===================== LOOP =====================
void loop() {
  if (!deviceConnected || sentOnce) {
    delay(200);
    return;
  }

  delay (3000);  // ⏳ give browser time to fully subscribe

  int moistureSum = 0;
  int ecSum = 0;
  int phSum = 0;

  for (int i = 0; i < SAMPLES; i++) {
    moistureSum += analogRead(MOISTURE_PIN);
    ecSum += analogRead(EC_PIN);
    phSum += analogRead(PH_PIN);
    delay(READ_DELAY);
  }

  int moistureRawAvg = moistureSum / SAMPLES;
  int ecRawAvg = ecSum / SAMPLES;
  int phRawAvg = phSum / SAMPLES;

  int moisture = moisturePercent(moistureRawAvg);
  int ec = ecValue(ecRawAvg);
  float pH = readPH(phRawAvg);

  Serial.print("📤 Snapshot → Moisture: ");
  Serial.print(moisture);
  Serial.print("% | EC: ");
  Serial.println(ec);

  uint8_t payload[3];
  payload[0] = (uint8_t) moisture;
  payload[1] = (uint8_t) ec;
  payload[2] = (uint8_t) (pH * 10.0);       // pH × 10 (e.g. 6.8 → 68)

  pCharacteristic->setValue(payload, 3);
  pCharacteristic->notify();

  sentOnce = true;   // 🔒 ensure ONE-SHOT per connection
}

