// =====================================================
// LANGUAGE TRANSLATIONS
// CHANGEABLE - Add or modify translations here
// =====================================================

export type Language = 'en' | 'hi' | 'gu';

export const TRANSLATIONS = {
  // Language Selection Screen
  selectLanguage: {
    en: 'Select Language',
    hi: 'भाषा चुनें',
    gu: 'ભાષા પસંદ કરો',
  },
  continue: {
    en: 'Continue',
    hi: 'जारी रखें',
    gu: 'ચાલુ રાખો',
  },

  // Splash Screen
  appName: {
    en: 'Agricore Dynamics',
    hi: 'एग्रीकोर डायनामिक्स',
    gu: 'એગ્રીકોર ડાયનેમિક્સ',
  },
  appSubtitle: {
    en: 'Smart Soil Testing for Farmers',
    hi: 'किसानों के लिए स्मार्ट मिट्टी परीक्षण',
    gu: 'ખેડૂતો માટે સ્માર્ટ માટી પરીક્ષણ',
  },
  getStarted: {
    en: 'Get Started',
    hi: 'शुरू करें',
    gu: 'શરૂ કરો',
  },

  // Farmer Details Screen
  farmerDetails: {
    en: 'Farmer Details',
    hi: 'किसान विवरण',
    gu: 'ખેડૂતની વિગતો',
  },
  farmerName: {
    en: 'Farmer Name',
    hi: 'किसान का नाम',
    gu: 'ખેડૂતનું નામ',
  },
  mobileNumber: {
    en: 'Mobile Number',
    hi: 'मोबाइल नंबर',
    gu: 'મોબાઇલ નંબર',
  },
  village: {
    en: 'Village / Place',
    hi: 'गांव / स्थान',
    gu: 'ગામ / સ્થળ',
  },
  landArea: {
    en: 'Land Area',
    hi: 'भूमि क्षेत्र',
    gu: 'જમીનનો વિસ્તાર',
  },
  season: {
    en: 'Season',
    hi: 'मौसम',
    gu: 'મોસમ',
  },
  weatherLast3Days: {
    en: 'Weather (Last 3 Days)',
    hi: 'मौसम (पिछले 3 दिन)',
    gu: 'હવામાન (છેલ્લા 3 દિવસ)',
  },
  day1: {
    en: 'Day 1 (Yesterday)',
    hi: 'दिन 1 (कल)',
    gu: 'દિવસ 1 (ગઈકાલે)',
  },
  day2: {
    en: 'Day 2',
    hi: 'दिन 2',
    gu: 'દિવસ 2',
  },
  day3: {
    en: 'Day 3',
    hi: 'दिन 3',
    gu: 'દિવસ 3',
  },
  saveAndContinue: {
    en: 'Save & Continue',
    hi: 'सहेजें और जारी रखें',
    gu: 'સાચવો અને ચાલુ રાખો',
  },
  editDetails: {
    en: 'Edit Details',
    hi: 'विवरण संपादित करें',
    gu: 'વિગતો સંપાદિત કરો',
  },

  // Main Screen
  mainScreen: {
    en: 'Soil Sensor Dashboard',
    hi: 'मिट्टी सेंसर डैशबोर्ड',
    gu: 'માટી સેન્સર ડેશબોર્ડ',
  },
  farmer: {
    en: 'Farmer',
    hi: 'किसान',
    gu: 'ખેડૂત',
  },
  connectAndRead: {
    en: 'Connect & Read from ESP32',
    hi: 'ESP32 से कनेक्ट करें और पढ़ें',
    gu: 'ESP32 થી કનેક્ટ કરો અને વાંચો',
  },
  connecting: {
    en: 'Connecting...',
    hi: 'कनेक्ट हो रहा है...',
    gu: 'કનેક્ટ થઈ રહ્યું છે...',
  },
  readingData: {
    en: 'Reading data...',
    hi: 'डेटा पढ़ा जा रहा है...',
    gu: 'ડેટા વાંચી રહ્યાં છીએ...',
  },
  changeLanguage: {
    en: 'Change Language',
    hi: 'भाषा बदलें',
    gu: 'ભાષા બદલો',
  },

  // Results Screen
  soilAnalysisResults: {
    en: 'Soil Analysis Results',
    hi: 'मिट्टी विश्लेषण परिणाम',
    gu: 'માટી વિશ્લેષણ પરિણામો',
  },
  farmerInfo: {
    en: 'Farmer Information',
    hi: 'किसान की जानकारी',
    gu: 'ખેડૂતની માહિતી',
  },
  soilReadings: {
    en: 'Soil Readings',
    hi: 'मिट्टी की रीडिंग',
    gu: 'માટીના રીડિંગ્સ',
  },
  suggestedCrops: {
    en: 'Suggested Crops',
    hi: 'सुझाई गई फसलें',
    gu: 'સૂચવેલ પાકો',
  },
  fertilizerSuggestions: {
    en: 'Fertilizer Suggestions',
    hi: 'उर्वरक सुझाव',
    gu: 'ખાતર સૂચનો',
  },
  basedOnSoilAndWeather: {
    en: 'Based on soil conditions and weather',
    hi: 'मिट्टी की स्थिति और मौसम के आधार पर',
    gu: 'માટીની સ્થિતિ અને હવામાનના આધારે',
  },
  scanAgain: {
    en: 'Scan Again',
    hi: 'फिर से स्कैन करें',
    gu: 'ફરી સ્કેન કરો',
  },
  moisture: {
    en: 'Moisture',
    hi: 'नमी',
    gu: 'ભેજ',
  },
  nitrogen: {
    en: 'Nitrogen (N)',
    hi: 'नाइट्रोजन (N)',
    gu: 'નાઇટ્રોજન (N)',
  },
  phosphorus: {
    en: 'Phosphorus (P)',
    hi: 'फास्फोरस (P)',
    gu: 'ફોસ્ફરસ (P)',
  },
  potassium: {
    en: 'Potassium (K)',
    hi: 'पोटेशियम (K)',
    gu: 'પોટેશિયમ (K)',
  },
  perAcre: {
    en: 'per acre',
    hi: 'प्रति एकड़',
    gu: 'પ્રતિ એકર',
  },
  urea: {
    en: 'Urea',
    hi: 'यूरिया',
    gu: 'યુરિયા',
  },
  dap: {
    en: 'DAP (Diammonium Phosphate)',
    hi: 'डीएपी (डायअमोनियम फॉस्फेट)',
    gu: 'DAP (ડાયામોનિયમ ફોસ્ફેટ)',
  },
  mop: {
    en: 'MOP (Muriate of Potash)',
    hi: 'एमओपी (म्यूरिएट ऑफ पोटाश)',
    gu: 'MOP (મ્યુરેટ ઓફ પોટાશ)',
  },
  kg: {
    en: 'kg',
    hi: 'किग्रा',
    gu: 'કિલો',
  },
  low: {
    en: 'Low',
    hi: 'कम',
    gu: 'ઓછું',
  },
  medium: {
    en: 'Medium',
    hi: 'मध्यम',
    gu: 'મધ્યમ',
  },
  high: {
    en: 'High',
    hi: 'उच्च',
    gu: 'ઊંચું',
  },
  optimal: {
    en: 'Optimal',
    hi: 'इष्टतम',
    gu: 'શ્રેષ્ઠ',
  },
  yourSoilIs: {
    en: 'Your soil is',
    hi: 'आपकी मिट्टी है',
    gu: 'તમારી માટી છે',
  },
  forTheseCrops: {
    en: 'for these crops in current weather',
    hi: 'वर्तमान मौसम में इन फसलों के लिए',
    gu: 'વર્તમાન હવામાનમાં આ પાકો માટે',
  },
  applyFertilizers: {
    en: 'Apply the following fertilizers:',
    hi: 'निम्नलिखित उर्वरक लगाएं:',
    gu: 'નીચેના ખાતરો લાગુ કરો:',
  },
  goodSoilHealth: {
    en: 'Good soil health! Maintain current practices.',
    hi: 'अच्छी मिट्टी की सेहत! वर्तमान तरीके बनाए रखें।',
    gu: 'સારું માટી આરોગ્य! વર્તમાન પદ્ધતિઓ જાળવો.',
  },
};
