const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const CHAR_UUID    = "beb5483e-36e1-4688-b7f5-ea07361b26a8";

let characteristic: BluetoothRemoteGATTCharacteristic | null = null;

export async function connectBLE(onMoisture: (value: number) => void) {
  if (!navigator.bluetooth) {
    alert("Web Bluetooth not available. Use Safari over HTTPS.");
    return;
  }

  const device = await navigator.bluetooth.requestDevice({
    filters: [{ name: "SoilSense-ESP32" }],
    optionalServices: [SERVICE_UUID],
  });

  const server = await device.gatt!.connect();
  const service = await server.getPrimaryService(SERVICE_UUID);
  characteristic = await service.getCharacteristic(CHAR_UUID);

  await characteristic.startNotifications();

  characteristic.addEventListener(
    "characteristicvaluechanged",
    (event: Event) => {
      const value = (event.target as BluetoothRemoteGATTCharacteristic).value!;
      const moisture = value.getUint8(0); // 0–100
      onMoisture(moisture);
    }
  );
}
