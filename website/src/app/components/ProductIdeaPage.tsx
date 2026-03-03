import { motion } from 'motion/react';
import { AlertCircle, Lightbulb, FlaskConical, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductIdeaPage() {
  return (
    <div className="min-h-screen bg-[#0a1810] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl text-white mb-6">
            The Challenge & <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Solution</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Understanding the problem, researching solutions, and developing NutriScan Pro
          </p>
        </motion.div>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="text-white" size={32} />
                </div>
                <h2 className="text-4xl text-white">The Problem</h2>
              </div>

              <div className="space-y-6 text-gray-400">
                <p className="text-lg">
                  Modern agriculture is undergoing a significant socio-economic shift. Small and medium-scale farmers increasingly 
                  face declining soil fertility, unpredictable crop yields, and rising input costs. Most nutrient decisions are 
                  still made through visual observation or past experience, which often leads to inefficient fertilizer usage and 
                  reduced soil health over time.
                </p>

                <div className="bg-white/5 border border-orange-500/20 rounded-xl p-6">
                  <h3 className="text-xl text-white mb-3">Current Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Excessive fertilizer application causing soil degradation and environmental harm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Laboratory-based soil testing that is expensive and time-consuming (typically several days)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>No access to real-time soil data for immediate corrective action</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Precision agriculture tools remain inaccessible to most small farmers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
                  <h3 className="text-xl text-white mb-2">The Gap</h3>
                  <p>
                    Farmers need a portable, affordable, and fast method to assess soil health directly in the field, 
                    enabling informed decisions on crop selection and nutrient management without dependence on laboratories.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583331083383-2520db23f02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwdGVzdGluZyUyMGZhcm1lcnxlbnwxfHx8fDE3NjY3NTQ4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Farmer with soil"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1810] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Research */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <FlaskConical className="text-white" size={32} />
            </div>
            <h2 className="text-4xl text-white">Research & Development</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'NPK Sensing',
                description: 'We explored different approaches to measuring soil nutrients, including electrochemical sensing techniques and ion-selective measurement methods. Research focused on understanding how Nitrogen, Phosphorus, and Potassium levels influence crop growth and how they can be estimated using compact sensor systems.'
              },
              {
                title: 'pH Chemistry',
                description: 'We studied pH probe technology, calibration techniques, and the role of soil acidity in nutrient availability. Special emphasis was placed on integrating a pH sensor that could provide meaningful insights into soil conditions affecting crop suitability.'
              },
              {
                title: 'Crop Nutrient Requirements',
                description: 'Agronomic research was conducted to understand optimal nutrient ranges for common crops across different seasons and soil conditions. This data was compiled into a crop recommendation framework used by the application.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-500"
              >
                <h3 className="text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Development Method */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
              <Settings className="text-white" size={32} />
            </div>
            <h2 className="text-4xl text-white">Development Method</h2>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Concept Formation',
                  description: 'The idea originated from brainstorming sessions focused on reducing dependency on laboratory soil testing. Initial sketches and feasibility studies were conducted to evaluate sensor availability, cost, and usability.',
                  status: 'Ideation'
                },
                {
                  phase: 'Phase 2',
                  title: 'Prototype 1',
                  description: 'A functional prototype was built using a microcontroller, soil moisture sensing, EC-based nutrient estimation, and a pH probe. Early testing was performed under controlled conditions.',
                  status: 'Development'
                },
                {
                  phase: 'Phase 3',
                  title: 'Design Improvements',
                  description: 'Based on testing outcomes, sensor readings were stabilized, Bluetooth connectivity was introduced, and a mobile/web application was developed for real-time data visualization and crop recommendations. The hardware design was refined for better durability and field use.',
                  status: 'Refinement'
                },
                {
                  phase: 'Phase 4',
                  title: 'Final System',
                  description: 'The final system integrates calibrated sensors with an intuitive application interface, providing instant soil health insights and crop suggestions. The solution demonstrates the feasibility of rapid, field-level soil diagnostics tailored for small-scale farming needs.',
                  status: 'Completion'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-12"
                >
                  {/* Timeline line */}
                  {index < 3 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600" />
                  )}

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50"
                  >
                    <Lightbulb className="text-white" size={20} />
                  </motion.div>

                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                        {step.phase}
                      </span>
                      <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium">
                        {step.status}
                      </span>
                    </div>
                    <h3 className="text-2xl text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}