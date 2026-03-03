import { motion } from 'motion/react';
import { FlaskConical, Calculator, Atom } from 'lucide-react';

interface IntegrationPageProps {
  currentSubPage: string;
  onNavigateSubPage: (subPage: string) => void;
}

export function IntegrationPage({ currentSubPage, onNavigateSubPage }: IntegrationPageProps) {
  return (
    <div className="min-h-screen bg-[#0a1810] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl text-white mb-6">
            Science Integration in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">NutriScan Pro</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            NutriScan Pro is not just an electronic device — it is a practical application of Physics, Chemistry, and Mathematics 
            working together to solve a real-world agricultural problem. Each science plays a distinct but interconnected role in 
            transforming soil conditions into meaningful, actionable insights for farmers.
          </p>
        </motion.div>

        {/* Sub-navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { id: 'chemistry', label: 'Chemistry & Soil Science', icon: FlaskConical },
            { id: 'mathematics', label: 'Mathematics & Data Analysis', icon: Calculator },
            { id: 'physics', label: 'Physics', icon: Atom }
          ].map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigateSubPage(item.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                currentSubPage === item.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-white/5 text-gray-300 border border-emerald-500/20 hover:bg-white/10 hover:border-emerald-500/40'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={currentSubPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentSubPage === 'chemistry' && <ChemistrySection />}
          {currentSubPage === 'mathematics' && <MathematicsSection />}
          {currentSubPage === 'physics' && <PhysicsSection />}
        </motion.div>
      </div>
    </div>
  );
}

function ChemistrySection() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
            <FlaskConical className="text-white" size={32} />
          </div>
          <h2 className="text-4xl text-white">Chemistry Integration</h2>
        </div>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Chemistry explains what is happening inside the soil and why certain readings matter for plant growth.
        </p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h3 className="text-2xl text-white mb-4">Soil pH & Nutrient Availability</h3>
            <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6">
              <p className="mb-4">
                Soil pH controls whether nutrients are available or locked in the soil:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Acidic soils</strong> can lock phosphorus with iron and aluminum
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Alkaline soils</strong> can lock phosphorus with calcium
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Most crops grow best</strong> between pH 6–7
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <p className="text-purple-300 text-sm">
                  This chemical behavior directly affects crop health and fertilizer efficiency.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white mb-4">Nutrients as Ions</h3>
            <div className="bg-white/5 border border-pink-500/20 rounded-xl p-6">
              <p className="mb-4">
                Plants absorb nutrients only when they are dissolved as ions in soil water:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Nitrogen, Phosphorus, and Potassium</strong> exist in ionic forms
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">EC reflects</strong> the total concentration of these dissolved ions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Water acts</strong> as the medium that enables chemical reactions and nutrient transport
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white mb-4">Soil–Water Interaction</h3>
            <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6">
              <p className="text-gray-400 leading-relaxed">
                Mixing soil with water during testing replicates real root-zone conditions, allowing accurate measurement 
                of chemical behavior that plants experience underground.
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-2xl p-6 text-center">
            <p className="text-xl text-white">
              <strong>In short:</strong> <span className="text-purple-300">Chemistry explains why certain soil conditions support or restrict plant growth.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MathematicsSection() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-3xl p-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
            <Calculator className="text-white" size={32} />
          </div>
          <h2 className="text-4xl text-white">Mathematics Integration</h2>
        </div>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Mathematics transforms raw sensor readings into useful information and decisions.
        </p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h3 className="text-2xl text-white mb-4">Sensor Calibration & Conversion</h3>
            <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6">
              <p className="mb-4">
                Sensors output raw electrical values. Mathematics is used to:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Scale raw readings</strong> into real-world units (pH, moisture %, EC)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Apply offsets</strong> and calibration factors
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Normalize values</strong> to comparable ranges
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  Without mathematical conversion, sensor data would be meaningless.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white mb-4">Derived Soil Fertility Index</h3>
            <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6">
              <p className="mb-4">
                Instead of directly measuring N, P, and K chemically, NutriScan Pro uses a <strong className="text-white">mathematical 
                fertility model</strong> that combines:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">EC</strong> (nutrient presence)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Moisture</strong> (water availability)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">pH</strong> (chemical suitability)
                  </p>
                </div>
              </div>
              <div className="mt-4 text-gray-400 text-sm">
                <p>Each parameter is normalized and weighted to generate a fertility score.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white mb-4">Crop Suitability Scoring</h3>
            <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6">
              <p className="mb-4">
                Mathematics compares soil conditions against crop requirements:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 font-medium mb-2">pH proximity</p>
                  <p className="text-gray-400 text-sm">How close is soil pH to crop's ideal range</p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-cyan-400 font-medium mb-2">Nutrient sufficiency</p>
                  <p className="text-gray-400 text-sm">Are nutrient levels adequate</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 font-medium mb-2">Moisture compatibility</p>
                  <p className="text-gray-400 text-sm">Is water content suitable</p>
                </div>
              </div>
              <div className="mt-4 text-gray-400">
                <p>Each crop receives a suitability score, and the highest-scoring crops are recommended — removing guesswork from farming decisions.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white mb-4">Graphs & Trend Analysis</h3>
            <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6">
              <p className="mb-4">Mathematical plotting enables:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Visual tracking</strong> of soil changes over time
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Identification of trends</strong> after irrigation or fertilizer use
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <p className="text-gray-400">
                    <strong className="text-white">Better long-term</strong> soil management decisions
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-2xl p-6 text-center">
            <p className="text-xl text-white">
              <strong>In short:</strong> <span className="text-cyan-300">Mathematics converts data into decisions.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PhysicsSection() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
            <Atom className="text-white" size={32} />
          </div>
          <h2 className="text-4xl text-white">Physics Integration</h2>
        </div>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Physics forms the backbone of NutriScan Pro by enabling the measurement of soil properties through electrical 
          and electronic principles.
        </p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h3 className="text-2xl text-white mb-4">Electrical Conductivity & Resistance</h3>
            <div className="bg-white/5 border border-orange-500/20 rounded-xl p-6">
              <p className="mb-4">
                Soil behaves as a physical medium whose electrical properties change with moisture and dissolved nutrients. 
                When nutrients dissolve in soil water, they form charged ions that allow electric current to flow.
              </p>
              
              <div className="space-y-4">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-orange-400 font-medium mb-2">Electrical Conductivity (EC):</p>
                  <p className="text-gray-400 text-sm">
                    Higher ion concentration → higher conductivity → better nutrient availability
                  </p>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-medium mb-2">Resistance Measurement:</p>
                  <p className="text-gray-400 text-sm">
                    Moist and fertile soil offers lower resistance, while dry or nutrient-poor soil offers higher resistance
                  </p>
                </div>

                <div className="bg-white/5 border border-orange-500/30 rounded-lg p-6 mt-4">
                  <p className="text-gray-400 mb-3">These measurements are based on <strong className="text-white">Ohm's Law:</strong></p>
                  <div className="text-center font-mono text-2xl text-orange-400 mb-3">
                    R = V / I
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    where changes in voltage and current directly reflect soil condition.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white mb-4">pH Measurement (Electrochemical Principle)</h3>
            <div className="bg-white/5 border border-red-500/20 rounded-xl p-6">
              <p className="text-gray-400 leading-relaxed">
                The pH sensor generates a voltage depending on hydrogen ion concentration in the soil solution. This voltage 
                is converted into a pH value using calibration data, helping determine whether the soil is acidic, neutral, 
                or alkaline.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white mb-4">Wireless Communication</h3>
            <div className="bg-white/5 border border-orange-500/20 rounded-xl p-6">
              <p className="text-gray-400 leading-relaxed">
                Physics also enables <strong className="text-white">Bluetooth communication</strong>, where sensor data is 
                transmitted using electromagnetic waves from the ESP32 microcontroller to the mobile application in real time.
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-2xl p-6 text-center">
            <p className="text-xl text-white">
              <strong>In short:</strong> <span className="text-orange-300">Physics converts invisible electrical signals into measurable soil properties.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}