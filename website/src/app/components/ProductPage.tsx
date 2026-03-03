import { motion } from 'motion/react';
import { Smartphone, Wifi, Zap, TrendingUp, AlertTriangle, Battery, DollarSign, Settings, Activity, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductPage() {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
          >
            <p className="text-emerald-400 font-medium">Introducing</p>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              NutriScan Pro
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Precision soil analysis in the palm of your hand
          </p>
        </motion.div>

        {/* Product Image & Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                <ImageWithFallback
                  src="https://lh3.googleusercontent.com/d/1cqDKPvWFtynjUOyjQhTytDCHVOYDeucj"
                  alt="NutriScan Pro Device"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Demo Video */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/kc-7l47pK2U"
                  title="NutriScan Pro Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Product Description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl text-white mb-8 text-center">What It Does</h2>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-emerald-500/20 rounded-3xl p-12 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">NutriScan Pro</strong> is a handheld soil analysis system designed to provide
              rapid, field-level insights into soil health. By inserting the probe into the soil, farmers can instantly view
              key soil parameters through a connected mobile application.
            </p>

            <h3 className="text-2xl text-white mb-6">The system provides:</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-emerald-400 rounded-full mt-2" />
                <div>
                  <h4 className="text-white font-medium mb-2">Estimated Nitrogen (N), Phosphorus (P), and Potassium (K) status</h4>
                  <p className="text-gray-400">Derived using electrical conductivity (EC) as an indicator of overall nutrient availability.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-teal-400 rounded-full mt-2" />
                <div>
                  <h4 className="text-white font-medium mb-2">Soil pH level</h4>
                  <p className="text-gray-400">Indicates acidity or alkalinity, which directly affects nutrient uptake.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-cyan-400 rounded-full mt-2" />
                <div>
                  <h4 className="text-white font-medium mb-2">Soil moisture content</h4>
                  <p className="text-gray-400">Helps determine whether conditions are suitable for accurate nutrient assessment.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">How It Works</h3>
              <ol className="space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-medium">1.</span>
                  <span>The sensor probe is inserted into moist soil at root depth.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-medium">2.</span>
                  <span>The device captures EC, pH, and moisture readings within a few seconds.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-medium">3.</span>
                  <span>Sensor data is transmitted to the mobile application via Bluetooth.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-medium">4.</span>
                  <span>The application interprets the data to display soil health indicators.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-medium">5.</span>
                  <span>Based on soil condition, season, and weather inputs, the system suggests suitable crops and fertilizer adjustments.</span>
                </li>
              </ol>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl text-white mb-12 text-center">Key Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Instant Field Results',
                description: 'Provides soil health insights in seconds, eliminating the need for laboratory wait times.'
              },
              {
                icon: Smartphone,
                title: 'Mobile Application Interface',
                description: 'Displays readings, trends, and recommendations in a simple, farmer-friendly format.'
              },
              {
                icon: Wifi,
                title: 'Bluetooth Connectivity',
                description: 'Enables wireless data transfer between the device and the application.'
              },
              {
                icon: TrendingUp,
                title: 'Decision-Support Recommendations',
                description: 'Suggests crops and fertilizer actions using agronomic logic rather than static thresholds.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-500 group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-shadow"
                >
                  <feature.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Limitations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="text-white" size={32} />
            </div>
            <h2 className="text-4xl text-white">Product Limitations</h2>
          </div>

          <p className="text-gray-400 mb-8 text-lg">
            As a working prototype, NutriScan Pro has several limitations identified through testing.
            We believe transparency is essential and these constraints guide future improvements:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: Activity,
                title: 'Indirect NPK Estimation',
                description: 'The system does not directly measure individual Nitrogen, Phosphorus, and Potassium concentrations. Instead, it estimates overall nutrient status using electrical conductivity (EC) as a proxy. This makes the system suitable for trend analysis and decision support, not laboratory certification.'
              },
              {
                icon: Settings,
                title: 'Sensor Calibration',
                description: 'The pH and EC sensors require periodic calibration to maintain stable readings. Environmental factors and sensor drift can affect accuracy over time.'
              },
              {
                icon: DollarSign,
                title: 'Accuracy vs Cost Trade-off',
                description: 'The sensors used are optimized for affordability and portability rather than laboratory-grade precision. Readings are intended to indicate relative soil condition, not replace chemical soil reports.'
              },
              {
                icon: Droplet,
                title: 'Moisture Dependence',
                description: 'EC and pH readings are most reliable when the soil has adequate moisture or when measurements are taken using a soil–water slurry.'
              },
              {
                icon: Battery,
                title: 'Power Constraints',
                description: 'The current prototype operates using external USB power. Battery-based and solar-assisted power systems are planned for future iterations.'
              }
            ].map((limitation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <limitation.icon className="text-orange-400" size={24} />
                  <h3 className="text-lg text-white">{limitation.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{limitation.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl text-white mb-6">Conclusion</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Despite these limitations, <strong className="text-white">NutriScan Pro</strong> demonstrates the feasibility
              of fast, affordable, and accessible soil diagnostics at the field level. It bridges the gap between costly
              laboratory testing and guess-based farming practices, offering meaningful insights where traditional solutions
              are often impractical.
            </p>
            <div className="mt-8">
              <span className="text-gray-400 block mb-2">Access the companion application:</span>
              <a
                href="https://agricoredynamics-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 text-2xl font-semibold underline decoration-emerald-500/50 underline-offset-8 transition-all"
              >
                agricoredynamics-app.netlify.app
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
