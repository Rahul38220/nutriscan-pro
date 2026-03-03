# Agricore Dynamics - Smart Soil Testing App

A mobile-optimized Progressive Web App (PWA) for ESP32-based soil sensor systems. Built with React and Tailwind CSS.

## 🌾 Features

- **Multilingual Support**: Hindi, English, and Gujarati
- **5 Main Screens**:
  1. Language Selection
  2. Splash/Welcome Screen
  3. Farmer Details Entry
  4. Main Dashboard with ESP32 Connection
  5. Results Screen with Crop & Fertilizer Recommendations
- **Web Bluetooth API**: Connect directly to ESP32 via Bluetooth
- **Smart Recommendations**: Rules-based crop and fertilizer suggestions
- **Offline-First**: All data stored locally using localStorage
- **Mobile-Optimized**: Responsive design for smartphones

## 📱 Screen Flow

```
Language Selection → Splash Screen → Farmer Details → Main Dashboard → Results
                         ↑              ↓                    ↑              ↓
                         └──────────────┴────────────────────┴──────────────┘
                                    (Settings & Navigation)
```

## 🔧 ESP32 Integration

### Data Format Expected from ESP32

The app expects ONE line of text from your ESP32 in this exact format:

```
pH:X.XX,Moisture:YY,TDS:ZZZ,N:NNN,P:PPP,K:KKK
```

**Example:**
```
pH:6.8,Moisture:25,TDS:1.5,N:145,P:38,K:210
```

### How to Connect Real ESP32

1. Open `/utils/bluetooth.ts`
2. Update the UUIDs to match your ESP32:
   ```typescript
   const ESP32_SERVICE_UUID = 'YOUR-SERVICE-UUID-HERE';
   const ESP32_CHARACTERISTIC_UUID = 'YOUR-CHARACTERISTIC-UUID-HERE';
   ```
3. In `/components/MainScreen.tsx`, change:
   ```typescript
   // FROM:
   const data = await connectToESP32Demo();
   
   // TO:
   const data = await connectToESP32();
   ```

### Current Demo Mode

The app currently uses `connectToESP32Demo()` which returns mock data for testing. This simulates a 2-second connection delay and returns sample sensor values.

## ⚙️ Configuration

All customizable values are in `/config/appConfig.ts`:

### 1. **Soil Thresholds** (Lines 10-35)
```typescript
thresholds: {
  pH: { min: 6.0, max: 7.5, optimal: 6.5 },
  nitrogen: { low: 150, medium: 250, high: 350 },
  phosphorus: { low: 30, medium: 50, high: 70 },
  potassium: { low: 150, medium: 250, high: 350 },
  moisture: { low: 20, medium: 40, high: 60 },
}
```

### 2. **Fertilizer Amounts** (Lines 37-47)
```typescript
fertilizers: {
  urea: { lowN: 50, veryLowN: 75 },  // kg per acre
  dap: { lowP: 40, veryLowP: 60 },
  mop: { lowK: 30, veryLowK: 50 },
}
```

### 3. **Seasons** (Lines 49-53)
Add or modify seasons as needed.

### 4. **Weather Options** (Lines 55-62)
Add custom weather conditions with icons.

### 5. **Crop Recommendation Rules** (Lines 68-140 in `/config/appConfig.ts`)
Each rule has conditions like:
```typescript
{
  crops: ['Wheat', 'Maize', 'Corn'],
  cropsHi: ['गेहूं', 'मक्का', 'मकई'],
  cropsGu: ['ઘઉં', 'મકાઈ', 'કોર્ન'],
  conditions: {
    pHMin: 6.0,
    pHMax: 7.5,
    nMin: 200,
    pMin: 35,
    kMin: 200,
    dominantWeather: ['sunny', 'cloudy'],
    season: ['rabi', 'kharif'],
  },
}
```

## 🌍 Adding/Modifying Translations

Edit `/config/translations.ts` to add new text or modify existing translations:

```typescript
export const TRANSLATIONS = {
  yourNewKey: {
    en: 'English text',
    hi: 'हिंदी पाठ',
    gu: 'ગુજરાતી ટેક્સ્ટ',
  },
}
```

## 🎨 Customizing Colors

In `/config/appConfig.ts` (Lines 6-12):
```typescript
colors: {
  primary: '#4CAF50',    // Main green color
  accent: '#FF9800',     // Orange accent
  background: '#F5F5F5', // Light gray background
  card: '#FFFFFF',       // White cards
  text: '#2C3E50',       // Dark text
  textLight: '#7F8C8D',  // Light gray text
}
```

## 🚀 How to Test

1. **Testing Language Selection**: 
   - Clear localStorage and refresh to see language selection
   - Or delete the `language` key from localStorage

2. **Testing Farmer Details**:
   - Clear localStorage to reset all data
   - Edit details by clicking "Edit Details" on main screen

3. **Testing ESP32 Connection**:
   - Currently in DEMO mode with mock data
   - Replace with real ESP32 connection when ready

4. **Testing Recommendations**:
   - Modify the mock data in `/utils/bluetooth.ts` → `connectToESP32Demo()`
   - Change values to test different crop recommendations

## 📂 File Structure

```
/
├── config/
│   ├── appConfig.ts       ← EDIT: Thresholds, crops, fertilizers, seasons
│   └── translations.ts    ← EDIT: All text in 3 languages
├── utils/
│   ├── bluetooth.ts       ← EDIT: ESP32 connection and UUIDs
│   └── cropRecommendation.ts
├── components/
│   ├── LanguageSelection.tsx
│   ├── SplashScreen.tsx
│   ├── FarmerDetails.tsx
│   ├── MainScreen.tsx
│   └── ResultsScreen.tsx
├── App.tsx
└── styles/globals.css
```

## 🔒 Browser Compatibility

**Web Bluetooth API** is supported on:
- ✅ Chrome (Android, Windows, macOS, Linux)
- ✅ Edge (Windows, macOS)
- ✅ Samsung Internet (Android)
- ❌ Safari (not supported)
- ❌ Firefox (not supported)

**Recommended**: Use Chrome on Android for best mobile experience.

## 💾 Data Storage

All data is stored locally using `localStorage`:
- `language`: Selected language (en/hi/gu)
- `farmerData`: Farmer details including weather and season

**Note**: No backend or cloud storage. All processing happens in the browser.

## 📝 Next Steps

1. **Connect Real ESP32**: Update Bluetooth UUIDs in `/utils/bluetooth.ts`
2. **Customize Crops**: Edit crop rules in `/config/appConfig.ts`
3. **Adjust Thresholds**: Modify N/P/K thresholds based on local soil conditions
4. **Add More Languages**: Extend translations in `/config/translations.ts`
5. **Test on Mobile**: Install Chrome on Android and test Bluetooth connection

## ⚠️ Important Notes

- This is a **Progressive Web App**, not a native Flutter app
- Works on mobile browsers (can be installed to home screen)
- Requires Web Bluetooth API support (Chrome recommended)
- All farmer data is stored locally on device
- No internet connection required after initial load

---

**Built for:** Agricore Dynamics  
**Purpose:** ESP32-based soil sensor data analysis and crop recommendation
