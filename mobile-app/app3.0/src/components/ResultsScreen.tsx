import { Droplets, Leaf, FlaskConical, ArrowLeft } from 'lucide-react';
import { Language, TRANSLATIONS } from '../config/translations';
import { APP_CONFIG } from '../config/appConfig';
import { FarmerData } from './FarmerDetails';
import { SensorData } from '../utils/bluetooth';
import {
  getCropRecommendations,
  getFertilizerRecommendations,
  getNutrientStatus,
  getpHStatus,
} from '../utils/cropRecommendation';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ResultsScreenProps {
  language: Language;
  farmerData: FarmerData;
  sensorData: SensorData;
  onScanAgain: () => void;
}

export function ResultsScreen({
  language,
  farmerData,
  sensorData,
  onScanAgain,
}: ResultsScreenProps) {
  const cropRec = getCropRecommendations(
    sensorData,
    Array.from(farmerData.weather),
    farmerData.season,
    language
  );

  const fertilizerRecs = getFertilizerRecommendations(sensorData);

  // UI-safe pH value (prevent absurd readings from uncalibrated probe)
  const displayPH =
    sensorData.pH < 4 ? 4 :
    sensorData.pH > 10 ? 10 :
    sensorData.pH;

  // Mock historical data (simulated previous readings)
  const ecHistory = [
    { time: 'T-1', value: 17 },
    { time: 'T-2', value: 23 },
    { time: 'T-3', value: 20 },
    { time: 'T-4', value: 21 },
    { time: 'Now', value: sensorData.tds },
  ];

  const getWeatherLabel = (weatherValue: string) => {
    const weather = APP_CONFIG.weatherOptions.find((w) => w.value === weatherValue);
    if (!weather) return weatherValue;
    
    const labelKey = `label${language.charAt(0).toUpperCase() + language.slice(1)}` as 'labelEn' | 'labelHi' | 'labelGu';
    return `${weather.icon} ${weather[labelKey]}`;
  };

  const getStatusColor = (status: string) => {
    if (status === 'low') return '#F44336';
    if (status === 'medium') return '#FF9800';
    if (status === 'high') return '#2196F3';
    return APP_CONFIG.colors.primary;
  };

  const getStatusLabel = (status: string) => {
    return TRANSLATIONS[status as 'low' | 'medium' | 'high' | 'optimal'][language];
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: APP_CONFIG.colors.background }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onScanAgain}
            className="p-2 rounded-lg"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <ArrowLeft className="w-6 h-6" style={{ color: APP_CONFIG.colors.primary }} />
          </button>
          <h1 style={{ color: APP_CONFIG.colors.text }}>
            {TRANSLATIONS.soilAnalysisResults[language]}
          </h1>
        </div>

        {/* Farmer Info Card */}
        <div
          className="p-5 rounded-2xl mb-4 shadow-sm"
          style={{ backgroundColor: APP_CONFIG.colors.card }}
        >
          <div className="text-sm mb-2" style={{ color: APP_CONFIG.colors.textLight }}>
            {TRANSLATIONS.farmerInfo[language]}
          </div>
          <div style={{ color: APP_CONFIG.colors.text }}>
            <strong>{farmerData.name}</strong> • {farmerData.village}
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {farmerData.weather.map((w, i) => (
              <span
                key={i}
                className="text-sm px-2 py-1 rounded-lg"
                style={{
                  backgroundColor: APP_CONFIG.colors.background,
                  color: APP_CONFIG.colors.text,
                }}
              >
                {getWeatherLabel(w)}
              </span>
            ))}
          </div>
        </div>

        {/* Soil Readings */}
        <div
          className="p-5 rounded-2xl mb-4 shadow-sm"
          style={{ backgroundColor: APP_CONFIG.colors.card }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical className="w-5 h-5" style={{ color: APP_CONFIG.colors.primary }} />
            <div style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.soilReadings[language]}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* pH */}
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: APP_CONFIG.colors.background }}
            >
              <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
                pH
              </div>
              <div className="text-2xl mb-1" style={{ color: APP_CONFIG.colors.text }}>
                {displayPH.toFixed(1)}
              </div>
              <div
                className="text-sm"
                style={{ color: getStatusColor(getpHStatus(sensorData.pH)) }}
              >
                {getStatusLabel(getpHStatus(displayPH))}
              </div>
            </div>

            {/* Moisture */}
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: APP_CONFIG.colors.background }}
            >
              <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
                {TRANSLATIONS.moisture[language]}
              </div>
              <div className="text-2xl mb-1" style={{ color: APP_CONFIG.colors.text }}>
                {sensorData.moisture}%
              </div>
            </div>

            {/* EC */}
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: APP_CONFIG.colors.background }}
            >
              <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
                EC
              </div>
              <div className="text-2xl mb-1" style={{ color: APP_CONFIG.colors.text }}>
                {sensorData.tds}
              </div>
            </div>

            {/* Nitrogen */}
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: APP_CONFIG.colors.background }}
            >
              <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
                {TRANSLATIONS.nitrogen[language]}
              </div>
              <div className="text-2xl mb-1" style={{ color: APP_CONFIG.colors.text }}>
                {sensorData.nitrogen}
              </div>
              <div
                className="text-sm"
                style={{ color: getStatusColor(getNutrientStatus(sensorData.nitrogen, 'nitrogen')) }}
              >
                {getStatusLabel(getNutrientStatus(sensorData.nitrogen, 'nitrogen'))}
              </div>
            </div>

            {/* Phosphorus */}
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: APP_CONFIG.colors.background }}
            >
              <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
                {TRANSLATIONS.phosphorus[language]}
              </div>
              <div className="text-2xl mb-1" style={{ color: APP_CONFIG.colors.text }}>
                {sensorData.phosphorus}
              </div>
              <div
                className="text-sm"
                style={{ color: getStatusColor(getNutrientStatus(sensorData.phosphorus, 'phosphorus')) }}
              >
                {getStatusLabel(getNutrientStatus(sensorData.phosphorus, 'phosphorus'))}
              </div>
            </div>

            {/* Potassium */}
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: APP_CONFIG.colors.background }}
            >
              <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
                {TRANSLATIONS.potassium[language]}
              </div>
              <div className="text-2xl mb-1" style={{ color: APP_CONFIG.colors.text }}>
                {sensorData.potassium}
              </div>
              <div
                className="text-sm"
                style={{ color: getStatusColor(getNutrientStatus(sensorData.potassium, 'potassium')) }}
              >
                {getStatusLabel(getNutrientStatus(sensorData.potassium, 'potassium'))}
              </div>
            </div>
          </div>
        </div>

	{/* EC Trend Graph */}
	<div
  	  className="mt-4 p-4 rounded-xl"
  	  style={{ backgroundColor: APP_CONFIG.colors.background }}
	>
  	  <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
    	    EC Trend
  	  </div>
  	  <div className="h-32">
    	    <ResponsiveContainer width="100%" height={120}>
      	      <LineChart data={ecHistory}>
        	<XAxis dataKey="time" tick={{ fontSize: 10 }} />
        	<YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
        	<Tooltip />
        	<Line
          	  type="monotone"
          	  dataKey="value"
          	  stroke={APP_CONFIG.colors.primary}
          	  strokeWidth={2}
          	  dot={{ r: 3 }}
        	/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Crop Recommendations */}
        <div
          className="p-5 rounded-2xl mb-4 shadow-sm"
          style={{ backgroundColor: APP_CONFIG.colors.card }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-5 h-5" style={{ color: APP_CONFIG.colors.primary }} />
            <div style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.suggestedCrops[language]}
            </div>
          </div>
          <div className="text-sm mb-3" style={{ color: APP_CONFIG.colors.textLight }}>
            {TRANSLATIONS.basedOnSoilAndWeather[language]}
          </div>
          <div className="flex gap-2 flex-wrap">
            {cropRec.crops.map((crop, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-xl"
                style={{
                  backgroundColor: APP_CONFIG.colors.primary + '20',
                  color: APP_CONFIG.colors.primary,
                }}
              >
                {crop}
              </div>
            ))}
          </div>
        </div>

        {/* Fertilizer Recommendations */}
        <div
          className="p-5 rounded-2xl mb-4 shadow-sm"
          style={{ backgroundColor: APP_CONFIG.colors.card }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Droplets className="w-5 h-5" style={{ color: APP_CONFIG.colors.accent }} />
            <div style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.fertilizerSuggestions[language]}
            </div>
          </div>
          
          {fertilizerRecs.length > 0 ? (
            <div className="space-y-3">
              <div className="text-sm mb-3" style={{ color: APP_CONFIG.colors.textLight }}>
                {TRANSLATIONS.applyFertilizers[language]}
              </div>
              {fertilizerRecs.map((rec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl flex items-center justify-between"
                  style={{ backgroundColor: APP_CONFIG.colors.background }}
                >
                  <div>
                    <div style={{ color: APP_CONFIG.colors.text }}>
                      {TRANSLATIONS[rec.fertilizer as 'urea' | 'dap' | 'mop'][language]}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl" style={{ color: APP_CONFIG.colors.accent }}>
                      {rec.amount} {TRANSLATIONS.kg[language]}
                    </div>
                    <div className="text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                      {TRANSLATIONS.perAcre[language]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="p-4 rounded-xl text-center"
              style={{
                backgroundColor: APP_CONFIG.colors.primary + '20',
                color: APP_CONFIG.colors.primary,
              }}
            >
              ✅ {TRANSLATIONS.goodSoilHealth[language]}
            </div>
          )}
        </div>

        {/* Scan Again Button */}
        <button
          onClick={onScanAgain}
          className="w-full py-4 px-6 rounded-2xl text-white transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: APP_CONFIG.colors.primary }}
        >
          {TRANSLATIONS.scanAgain[language]}
        </button>
      </div>
    </div>
  );
}
