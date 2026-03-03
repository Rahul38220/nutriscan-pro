import { Sprout } from 'lucide-react';
import { Language, TRANSLATIONS } from '../config/translations';
import { APP_CONFIG } from '../config/appConfig';
import logo from 'figma:asset/364d38bcd29a951f52afe70e2ffe7a9ac60fcc5e.png';

interface SplashScreenProps {
  language: Language;
  onGetStarted: () => void;
}

export function SplashScreen({ language, onGetStarted }: SplashScreenProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-6"
      style={{
        background: `linear-gradient(135deg, ${APP_CONFIG.colors.primary} 0%, #2E7D32 100%)`,
      }}
    >
      {/* Top spacing */}
      <div className="flex-1" />

      {/* Logo and Branding */}
      <div className="flex flex-col items-center">
        {/* Company Logo */}
        <div className="mb-8 bg-white p-6 rounded-3xl shadow-2xl">
          <img src={logo} alt="Agricore Dynamics" className="w-48 h-auto" />
        </div>

        {/* App Icon */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Sprout className="w-10 h-10" style={{ color: APP_CONFIG.colors.primary }} />
        </div>

        {/* App Name and Subtitle */}
        <h1 className="text-center text-white mb-2">
          {TRANSLATIONS.appName[language]}
        </h1>
        <p className="text-center text-white/90 text-lg px-4">
          {TRANSLATIONS.appSubtitle[language]}
        </p>
      </div>

      {/* Bottom button */}
      <div className="w-full max-w-md">
        <button
          onClick={onGetStarted}
          className="w-full py-4 px-6 rounded-2xl text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
          style={{
            backgroundColor: 'white',
            color: APP_CONFIG.colors.primary,
          }}
        >
          {TRANSLATIONS.getStarted[language]}
        </button>
      </div>
    </div>
  );
}
