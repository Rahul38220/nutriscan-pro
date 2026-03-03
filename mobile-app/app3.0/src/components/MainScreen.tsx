import { useState } from 'react';
import { Bluetooth, User, MapPin, Calendar, CloudSun, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../config/translations';
import { APP_CONFIG } from '../config/appConfig';
import { FarmerData } from './FarmerDetails';
import { connectToESP32, SensorData } from '../utils/bluetooth';

interface MainScreenProps {
  language: Language;
  farmerData: FarmerData;
  onEditDetails: () => void;
  onDataReceived: (data: SensorData) => void;
  onChangeLanguage: () => void;
}

export function MainScreen({
  language,
  farmerData,
  onEditDetails,
  onDataReceived,
  onChangeLanguage,
}: MainScreenProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    if (isConnecting) return;

    setIsConnecting(true);
    setError(null);

    try {
      console.log('🔗 Connecting to ESP32…');

      // 🔑 ONE SNAPSHOT, ONE RESULT
      const data = await connectToESP32();

      console.log('✅ Snapshot received:', data);

      onDataReceived(data); // ⟶ moves to Results screen
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Connection failed');
      setIsConnecting(false);
    }
  };

  const getWeatherLabel = (weatherValue: string) => {
    const weather = APP_CONFIG.weatherOptions.find((w) => w.value === weatherValue);
    if (!weather) return weatherValue;

    const labelKey =
      `label${language.charAt(0).toUpperCase() + language.slice(1)}` as
        | 'labelEn'
        | 'labelHi'
        | 'labelGu';

    return `${weather.icon} ${weather[labelKey]}`;
  };

  const getSeasonLabel = () => {
    const season = APP_CONFIG.seasons.find((s) => s.value === farmerData.season);
    if (!season) return farmerData.season;

    const labelKey =
      `label${language.charAt(0).toUpperCase() + language.slice(1)}` as
        | 'labelEn'
        | 'labelHi'
        | 'labelGu';

    return season[labelKey];
  };

  const getLandUnitLabel = () => {
    const unit = APP_CONFIG.landUnits.find((u) => u.value === farmerData.landUnit);
    if (!unit) return farmerData.landUnit;

    const labelKey =
      `label${language.charAt(0).toUpperCase() + language.slice(1)}` as
        | 'labelEn'
        | 'labelHi'
        | 'labelGu';

    return unit[labelKey];
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: APP_CONFIG.colors.background }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 style={{ color: APP_CONFIG.colors.text }}>
            {TRANSLATIONS.mainScreen[language]}
          </h1>
          <button
            onClick={onChangeLanguage}
            className="p-2 rounded-lg"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <Globe className="w-5 h-5" style={{ color: APP_CONFIG.colors.primary }} />
          </button>
        </div>

        {/* Farmer Summary Card */}
        <div
          className="p-6 rounded-2xl mb-6 shadow-sm"
          style={{ backgroundColor: APP_CONFIG.colors.card }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6" style={{ color: APP_CONFIG.colors.primary }} />
              <div>
                <div className="text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.farmer[language]}
                </div>
                <div style={{ color: APP_CONFIG.colors.text }}>
                  {farmerData.name}
                </div>
              </div>
            </div>
            <button
              onClick={onEditDetails}
              className="text-sm px-4 py-2 rounded-lg"
              style={{
                backgroundColor: APP_CONFIG.colors.background,
                color: APP_CONFIG.colors.primary,
              }}
            >
              {TRANSLATIONS.editDetails[language]}
            </button>
          </div>

          <div className="space-y-3">
            {/* Village */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" style={{ color: APP_CONFIG.colors.textLight }} />
              <div>
                <div className="text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.village[language]}
                </div>
                <div style={{ color: APP_CONFIG.colors.text }}>
                  {farmerData.village}
                </div>
              </div>
            </div>

            {/* Land Area */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" style={{ color: APP_CONFIG.colors.textLight }} />
              <div>
                <div className="text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.landArea[language]}
                </div>
                <div style={{ color: APP_CONFIG.colors.text }}>
                  {farmerData.landArea} {getLandUnitLabel()}
                </div>
              </div>
            </div>

            {/* Season */}
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" style={{ color: APP_CONFIG.colors.textLight }} />
              <div>
                <div className="text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.season[language]}
                </div>
                <div style={{ color: APP_CONFIG.colors.text }}>
                  {getSeasonLabel()}
                </div>
              </div>
            </div>

            {/* Weather */}
            <div className="flex items-center gap-3">
              <CloudSun className="w-5 h-5" style={{ color: APP_CONFIG.colors.textLight }} />
              <div className="flex-1">
                <div className="text-sm mb-1" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.weatherLast3Days[language]}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {farmerData.weather.map((w, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: APP_CONFIG.colors.background,
                        color: APP_CONFIG.colors.text,
                      }}
                    >
                      {getWeatherLabel(w)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="w-full py-6 px-6 rounded-2xl text-white transition-all disabled:opacity-50"
            style={{ backgroundColor: APP_CONFIG.colors.primary }}
          >
            <Bluetooth className="w-6 h-6 inline mr-2" />
            {isConnecting
              ? TRANSLATIONS.connecting[language]
              : TRANSLATIONS.connectAndRead[language]}
          </button>

          {error && (
            <div className="w-full p-4 rounded-xl text-center text-red-700 bg-red-100">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
