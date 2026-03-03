import { CROP_RECOMMENDATIONS, APP_CONFIG } from '../config/appConfig';
import { SensorData } from './bluetooth';
import { Language } from '../config/translations';

export interface CropRecommendation {
  crops: string[];
  reason: string;
}

export interface FertilizerRecommendation {
  fertilizer: string;
  amount: number;
  unit: string;
}

/**
 * Determine dominant weather from last 3 days
 */
export function getDominantWeather(weather: string[]): string {
  // Count occurrences
  const counts: { [key: string]: number } = {};
  weather.forEach((w) => {
    counts[w] = (counts[w] || 0) + 1;
  });

  // Find most common
  let dominant = weather[0];
  let maxCount = 0;
  Object.entries(counts).forEach(([weather, count]) => {
    if (count > maxCount) {
      maxCount = count;
      dominant = weather;
    }
  });

  return dominant;
}

/**
 * Check if weather matches rule
 */
function weatherMatches(dominantWeather: string, allowedWeather?: string[]): boolean {
  if (!allowedWeather || allowedWeather.length === 0) return true;
  return allowedWeather.includes(dominantWeather);
}

/**
 * Get crop recommendations based on soil data, weather, and season
 */
export function getCropRecommendations(
  sensorData: SensorData,
  weather: string[],
  season: string,
  language: Language
): CropRecommendation {
  const dominantWeather = getDominantWeather(weather);
  const { pH, nitrogen, phosphorus, potassium, moisture } = sensorData;

  // Check each rule
  for (const rule of CROP_RECOMMENDATIONS.rules) {
    const conditions = rule.conditions;
    let matches = true;

    // Check pH
    if (conditions.pHMin !== undefined && pH < conditions.pHMin) matches = false;
    if (conditions.pHMax !== undefined && pH > conditions.pHMax) matches = false;

    // Check N, P, K
    if (conditions.nMin !== undefined && nitrogen < conditions.nMin) matches = false;
    if (conditions.pMin !== undefined && phosphorus < conditions.pMin) matches = false;
    if (conditions.kMin !== undefined && potassium < conditions.kMin) matches = false;

    // Check moisture
    if (conditions.moistureMin !== undefined && moisture < conditions.moistureMin) matches = false;

    // Check weather
    if (!weatherMatches(dominantWeather, conditions.dominantWeather)) matches = false;

    // Check season
    if (conditions.season && !conditions.season.includes(season)) matches = false;

    if (matches) {
      let crops: string[];
      if (language === 'hi') {
        crops = rule.cropsHi;
      } else if (language === 'gu') {
        crops = rule.cropsGu;
      } else {
        crops = rule.crops;
      }

      return {
        crops,
        reason: `pH: ${pH.toFixed(1)}, N: ${nitrogen}, Weather: ${dominantWeather}`,
      };
    }
  }

  // No rules matched, return default
  let crops: string[];
  if (language === 'hi') {
    crops = CROP_RECOMMENDATIONS.default.cropsHi;
  } else if (language === 'gu') {
    crops = CROP_RECOMMENDATIONS.default.cropsGu;
  } else {
    crops = CROP_RECOMMENDATIONS.default.cropsEn;
  }

  return {
    crops,
    reason: 'General recommendation',
  };
}

/**
 * Get fertilizer recommendations based on N, P, K levels
 */
export function getFertilizerRecommendations(
  sensorData: SensorData
): FertilizerRecommendation[] {
  const recommendations: FertilizerRecommendation[] = [];
  const { nitrogen, phosphorus, potassium } = sensorData;
  const thresholds = APP_CONFIG.thresholds;
  const fertilizers = APP_CONFIG.fertilizers;

  // Nitrogen recommendations
  if (nitrogen < thresholds.nitrogen.low) {
    const amount = nitrogen < thresholds.nitrogen.low / 2 
      ? fertilizers.urea.veryLowN 
      : fertilizers.urea.lowN;
    
    recommendations.push({
      fertilizer: 'urea',
      amount,
      unit: 'kg',
    });
  }

  // Phosphorus recommendations
  if (phosphorus < thresholds.phosphorus.low) {
    const amount = phosphorus < thresholds.phosphorus.low / 2 
      ? fertilizers.dap.veryLowP 
      : fertilizers.dap.lowP;
    
    recommendations.push({
      fertilizer: 'dap',
      amount,
      unit: 'kg',
    });
  }

  // Potassium recommendations
  if (potassium < thresholds.potassium.low) {
    const amount = potassium < thresholds.potassium.low / 2 
      ? fertilizers.mop.veryLowK 
      : fertilizers.mop.lowK;
    
    recommendations.push({
      fertilizer: 'mop',
      amount,
      unit: 'kg',
    });
  }

  return recommendations;
}

/**
 * Get status label for a nutrient
 */
export function getNutrientStatus(value: number, type: 'nitrogen' | 'phosphorus' | 'potassium'): string {
  const thresholds = APP_CONFIG.thresholds[type];
  
  if (value < thresholds.low) return 'low';
  if (value < thresholds.medium) return 'medium';
  if (value < thresholds.high) return 'high';
  return 'optimal';
}

/**
 * Get pH status
 */
export function getpHStatus(pH: number): string {
  const { min, max } = APP_CONFIG.thresholds.pH;
  
  if (pH < min) return 'low';
  if (pH > max) return 'high';
  return 'optimal';
}
