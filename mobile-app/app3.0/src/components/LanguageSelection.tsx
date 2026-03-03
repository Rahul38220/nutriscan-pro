import { Languages } from 'lucide-react';
import { Language, TRANSLATIONS } from '../config/translations';
import { APP_CONFIG } from '../config/appConfig';

interface LanguageSelectionProps {
  onLanguageSelect: (language: Language) => void;
}

export function LanguageSelection({ onLanguageSelect }: LanguageSelectionProps) {
  const languages: Array<{ code: Language; name: string; nativeName: string }> = [
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ backgroundColor: APP_CONFIG.colors.background }}>
      <div className="w-full max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: APP_CONFIG.colors.primary }}
          >
            <Languages className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center mb-2" style={{ color: APP_CONFIG.colors.text }}>
          Select Language
        </h1>
        <p className="text-center mb-8" style={{ color: APP_CONFIG.colors.textLight }}>
          भाषा चुनें / ભાષા પસંદ કરો
        </p>

        {/* Language Options */}
        <div className="space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageSelect(lang.code)}
              className="w-full p-6 rounded-2xl border-2 transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: APP_CONFIG.colors.card,
                borderColor: APP_CONFIG.colors.primary,
              }}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{lang.nativeName}</div>
                <div className="text-sm" style={{ color: APP_CONFIG.colors.textLight }}>
                  {lang.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
