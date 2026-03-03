import { useState, useEffect } from 'react';
import { LanguageSelection } from './components/LanguageSelection';
import { SplashScreen } from './components/SplashScreen';
import { FarmerDetails, FarmerData } from './components/FarmerDetails';
import { MainScreen } from './components/MainScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { Language } from './config/translations';
import { SensorData } from './utils/bluetooth';

type Screen = 'language' | 'splash' | 'farmerDetails' | 'main' | 'results';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('language');
  const [language, setLanguage] = useState<Language>('en');
  const [farmerData, setFarmerData] = useState<FarmerData | null>(null);
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  // Load saved data on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const savedFarmerData = localStorage.getItem('farmerData');

    if (savedLanguage) {
      setLanguage(savedLanguage);
      
      if (savedFarmerData) {
        setFarmerData(JSON.parse(savedFarmerData));
        setCurrentScreen('main');
      } else {
        setCurrentScreen('splash');
      }
    }
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setCurrentScreen('splash');
  };

  const handleGetStarted = () => {
    setCurrentScreen('farmerDetails');
  };

  const handleFarmerDataSave = (data: FarmerData) => {
    setFarmerData(data);
    localStorage.setItem('farmerData', JSON.stringify(data));
    setCurrentScreen('main');
  };

  const handleEditDetails = () => {
    setCurrentScreen('farmerDetails');
  };

  const handleDataReceived = (data: SensorData) => {
    setSensorData(data);
    setCurrentScreen('results');
  };

  const handleScanAgain = () => {
  setSensorData(null);
  setTimeout(() => {
    setCurrentScreen('main');
  }, 50);
};

  const handleChangeLanguage = () => {
    setCurrentScreen('language');
  };

  return (
    <div className="app">
      {currentScreen === 'language' && (
        <LanguageSelection onLanguageSelect={handleLanguageSelect} />
      )}

      {currentScreen === 'splash' && (
        <SplashScreen language={language} onGetStarted={handleGetStarted} />
      )}

      {currentScreen === 'farmerDetails' && (
        <FarmerDetails
          language={language}
          initialData={farmerData || undefined}
          onSave={handleFarmerDataSave}
        />
      )}

      {currentScreen === 'main' && farmerData && (
        <MainScreen
          language={language}
          farmerData={farmerData}
          onEditDetails={handleEditDetails}
          onDataReceived={handleDataReceived}
          onChangeLanguage={handleChangeLanguage}
        />
      )}

      {currentScreen === 'results' && farmerData && sensorData && (
        <ResultsScreen
          language={language}
          farmerData={farmerData}
          sensorData={sensorData}
          onScanAgain={handleScanAgain}
        />
      )}
    </div>
  );
}
