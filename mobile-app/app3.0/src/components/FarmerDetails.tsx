import { useState, useEffect } from 'react';
import { User, MapPin, Calendar } from 'lucide-react';
import { Language, TRANSLATIONS } from '../config/translations';
import { APP_CONFIG } from '../config/appConfig';

export interface FarmerData {
  name: string;
  mobile: string;
  village: string;
  landArea: string;
  landUnit: string;
  season: string;
  weather: [string, string, string];
}

interface FarmerDetailsProps {
  language: Language;
  initialData?: FarmerData;
  onSave: (data: FarmerData) => void;
}

export function FarmerDetails({ language, initialData, onSave }: FarmerDetailsProps) {
  const [formData, setFormData] = useState<FarmerData>(
    initialData || {
      name: '',
      mobile: '',
      village: '',
      landArea: '',
      landUnit: 'acre',
      season: 'rabi',
      weather: ['sunny', 'sunny', 'sunny'],
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.mobile && formData.village && formData.landArea) {
      onSave(formData);
    } else {
      alert('Please fill all required fields');
    }
  };

  const getLabel = (key: string, index?: number) => {
    if (key.startsWith('weather_') && typeof index === 'number') {
      return APP_CONFIG.weatherOptions.find((w) => w.value === formData.weather[index])
        ?.[`label${language.charAt(0).toUpperCase() + language.slice(1)}` as 'labelEn' | 'labelHi' | 'labelGu'] || '';
    }
    return '';
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: APP_CONFIG.colors.background }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <User style={{ color: APP_CONFIG.colors.primary }} className="w-8 h-8" />
            <h1 style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.farmerDetails[language]}
            </h1>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Farmer Name */}
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <label className="block mb-2" style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.farmerName[language]} *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg border-2 outline-none focus:border-opacity-100"
              style={{
                borderColor: APP_CONFIG.colors.primary + '40',
                backgroundColor: APP_CONFIG.colors.background,
              }}
              required
            />
          </div>

          {/* Mobile Number */}
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <label className="block mb-2" style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.mobileNumber[language]} *
            </label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="w-full p-3 rounded-lg border-2 outline-none focus:border-opacity-100"
              style={{
                borderColor: APP_CONFIG.colors.primary + '40',
                backgroundColor: APP_CONFIG.colors.background,
              }}
              required
            />
          </div>

          {/* Village */}
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <label className="block mb-2" style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.village[language]} *
            </label>
            <input
              type="text"
              value={formData.village}
              onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              className="w-full p-3 rounded-lg border-2 outline-none focus:border-opacity-100"
              style={{
                borderColor: APP_CONFIG.colors.primary + '40',
                backgroundColor: APP_CONFIG.colors.background,
              }}
              required
            />
          </div>

          {/* Land Area */}
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <label className="block mb-2" style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.landArea[language]} *
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                step="0.01"
                value={formData.landArea}
                onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                className="flex-1 p-3 rounded-lg border-2 outline-none focus:border-opacity-100"
                style={{
                  borderColor: APP_CONFIG.colors.primary + '40',
                  backgroundColor: APP_CONFIG.colors.background,
                }}
                required
              />
              <select
                value={formData.landUnit}
                onChange={(e) => setFormData({ ...formData, landUnit: e.target.value })}
                className="p-3 rounded-lg border-2 outline-none"
                style={{
                  borderColor: APP_CONFIG.colors.primary + '40',
                  backgroundColor: APP_CONFIG.colors.background,
                }}
              >
                {APP_CONFIG.landUnits.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit[`label${language.charAt(0).toUpperCase() + language.slice(1)}` as 'labelEn' | 'labelHi' | 'labelGu']}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Season */}
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <label className="block mb-2" style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.season[language]} *
            </label>
            <select
              value={formData.season}
              onChange={(e) => setFormData({ ...formData, season: e.target.value })}
              className="w-full p-3 rounded-lg border-2 outline-none"
              style={{
                borderColor: APP_CONFIG.colors.primary + '40',
                backgroundColor: APP_CONFIG.colors.background,
              }}
            >
              {APP_CONFIG.seasons.map((season) => (
                <option key={season.value} value={season.value}>
                  {season[`label${language.charAt(0).toUpperCase() + language.slice(1)}` as 'labelEn' | 'labelHi' | 'labelGu']}
                </option>
              ))}
            </select>
          </div>

          {/* Weather - Last 3 Days */}
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: APP_CONFIG.colors.card }}
          >
            <label className="block mb-3" style={{ color: APP_CONFIG.colors.text }}>
              {TRANSLATIONS.weatherLast3Days[language]}
            </label>
            
            <div className="space-y-3">
              {/* Day 1 */}
              <div>
                <label className="block mb-1 text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.day1[language]}
                </label>
                <select
                  value={formData.weather[0]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      weather: [e.target.value, formData.weather[1], formData.weather[2]],
                    })
                  }
                  className="w-full p-3 rounded-lg border-2 outline-none"
                  style={{
                    borderColor: APP_CONFIG.colors.primary + '40',
                    backgroundColor: APP_CONFIG.colors.background,
                  }}
                >
                  {APP_CONFIG.weatherOptions.map((weather) => (
                    <option key={weather.value} value={weather.value}>
                      {weather.icon} {weather[`label${language.charAt(0).toUpperCase() + language.slice(1)}` as 'labelEn' | 'labelHi' | 'labelGu']}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day 2 */}
              <div>
                <label className="block mb-1 text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.day2[language]}
                </label>
                <select
                  value={formData.weather[1]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      weather: [formData.weather[0], e.target.value, formData.weather[2]],
                    })
                  }
                  className="w-full p-3 rounded-lg border-2 outline-none"
                  style={{
                    borderColor: APP_CONFIG.colors.primary + '40',
                    backgroundColor: APP_CONFIG.colors.background,
                  }}
                >
                  {APP_CONFIG.weatherOptions.map((weather) => (
                    <option key={weather.value} value={weather.value}>
                      {weather.icon} {weather[`label${language.charAt(0).toUpperCase() + language.slice(1)}` as 'labelEn' | 'labelHi' | 'labelGu']}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day 3 */}
              <div>
                <label className="block mb-1 text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {TRANSLATIONS.day3[language]}
                </label>
                <select
                  value={formData.weather[2]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      weather: [formData.weather[0], formData.weather[1], e.target.value],
                    })
                  }
                  className="w-full p-3 rounded-lg border-2 outline-none"
                  style={{
                    borderColor: APP_CONFIG.colors.primary + '40',
                    backgroundColor: APP_CONFIG.colors.background,
                  }}
                >
                  {APP_CONFIG.weatherOptions.map((weather) => (
                    <option key={weather.value} value={weather.value}>
                      {weather.icon} {weather[`label${language.charAt(0).toUpperCase() + language.slice(1)}` as 'labelEn' | 'labelHi' | 'labelGu']}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl text-white transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: APP_CONFIG.colors.primary }}
          >
            {TRANSLATIONS.saveAndContinue[language]}
          </button>
        </form>
      </div>
    </div>
  );
}
