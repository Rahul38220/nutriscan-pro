// =====================================================
// WEB BLUETOOTH UTILITIES FOR ESP32 (ONE-SHOT SNAPSHOT)
// Payload: 3 bytes -> [moisture (0–100), ec (0–100), pH(0-14)]
// =====================================================

export interface SensorData {
  pH: number;
  moisture: number;
  tds: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

// ⚠️ MUST match ESP32 UUIDs exactly
const ESP32_SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const ESP32_CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";

/**
 * Convert raw BLE bytes into app-level SensorData
 * Current logic:
 * - moisture = moisture
 * - EC drives TDS + N + P + K (same value for now)
 */
function toSensorData(moisture: number, ec: number, pH: number): SensorData {
  return {
    pH, // placeholder (future sensor)
    moisture,
    tds: ec,
    nitrogen: ec,
    phosphorus: ec,
    potassium: ec,
  };
}

/**
 * Parse BLE payload
 * Expected exactly 3 bytes:
 * [0] -> moisture (0–100)
 * [1] -> EC (0–100)
 * [2] -> pH x 10(0-100)
 */
function parsePayload(value: DataView): { moisture: number; ec: number; pH: number } {
  if (value.byteLength < 3) {
    throw new Error(`Expected 3 bytes but got ${value.byteLength}`);
  }

  return {
    moisture: value.getUint8(0),
    ec: value.getUint8(1),
    pH: value.getUint8(2) / 10, // 👈 undo scaling
  };
}

/**
 * Connect to ESP32, wait for ONE notification,
 * return snapshot, then disconnect.
 */
export async function connectToESP32(timeoutMs = 6000): Promise<SensorData> {
  if (!navigator.bluetooth) {
    throw new Error("Web Bluetooth not supported. Use Chrome.");
  }

  console.log("🔍 Requesting ESP32 device…");

  const device = await navigator.bluetooth.requestDevice({
    filters: [{ name: "ESP32-SoilSensor" }],
    optionalServices: [ESP32_SERVICE_UUID],
  });

  console.log("✅ Selected device:", device.name);

  const server = await device.gatt!.connect();
  console.log("🔗 GATT connected");

  const service = await server.getPrimaryService(ESP32_SERVICE_UUID);
  const characteristic = await service.getCharacteristic(
    ESP32_CHARACTERISTIC_UUID
  );

  await characteristic.startNotifications();
  console.log("📡 Waiting for snapshot…");

  return new Promise<SensorData>((resolve, reject) => {
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("No data received from ESP32"));
    }, timeoutMs);

    const handler = (event: Event) => {
      const ch = event.target as BluetoothRemoteGATTCharacteristic;
      if (!ch.value) return;

      try {
        const { moisture, ec, pH } = parsePayload(ch.value);
        console.log("✅ Snapshot received:", { moisture, ec, pH });

        cleanup();
        resolve(toSensorData(moisture, ec, pH));
      } catch (err) {
        cleanup();
        reject(err);
      }
    };

    function cleanup() {
      clearTimeout(timeout);
      characteristic.removeEventListener(
        "characteristicvaluechanged",
        handler
      );
      if (device.gatt?.connected) {
        device.gatt.disconnect();
        console.log("🔌 Disconnected");
      }
    }

    characteristic.addEventListener(
      "characteristicvaluechanged",
      handler
    );
  });
}
