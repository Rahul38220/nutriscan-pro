import { motion } from 'motion/react';
import { Heart, BookOpen, Users, FlaskConical } from 'lucide-react';

export function AcknowledgementPage() {
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
            Credits & <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">References</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Gratitude to those who supported our journey and the resources that guided us
          </p>
        </motion.div>

        {/* Acknowledgements Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-4xl text-white">Acknowledgements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Teachers & Mentors */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-pink-400" size={28} />
                <h3 className="text-2xl text-white">Teachers & Mentors</h3>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  We sincerely thank <strong className="text-white">Nilesh sir</strong> for mentoring our team during this project, 
                  providing valuable guidance in refining our approach and presentation.
                </p>
                <p>
                  We also extend our gratitude to the <strong className="text-white">Science Department</strong> for fostering 
                  an environment of experimentation, inquiry, and independent problem-solving that enabled us to initiate 
                  and develop this project from the ground up.
                </p>
              </div>
            </motion.div>

            {/* Ground Reality Validation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <FlaskConical className="text-emerald-400" size={28} />
                <h3 className="text-2xl text-white">Ground Reality Validation</h3>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  We consulted <strong className="text-white">Oxyfood Laboratory OPC Pvt. Ltd.</strong> to understand current market practices. 
                  Their analysis covers pH, EC, NPK, and micronutrients, costs ~₹1,500 + GST per sample, and takes 4–5 days. 
                  This comparison highlighted the need for a faster, on-field soil diagnostic solution.
                </p>
                <p>
                  An in-person interaction with a local farmer, <strong className="text-white">Mr. PragjiBhai Chaiyani</strong>, revealed 
                  that despite awareness of laboratory soil testing, it is rarely practiced due to time, accessibility, and reliance 
                  on personal experience, highlighting the need for a fast, field-deployable soil analysis solution.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Bibliography Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="text-white" size={32} />
            </div>
            <h2 className="text-4xl text-white">Bibliography & References</h2>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-blue-500/20 rounded-2xl p-8">
            <p className="text-gray-400 mb-6">
              The following resources were instrumental in our research and development:
            </p>

            <div className="space-y-6">
              {/* Research Papers */}
              <div>
                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Research Papers & Journals
                </h3>
                <div className="space-y-4 ml-6 text-gray-400">
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-300 font-medium mb-2">Soil Sampling: Bridging Farmer's Knowledge, Perception and Adoption for Sustainable Agriculture in Punjab, India</p>
                    <p className="text-sm mb-2">Highlights how high cost, delayed results, and poor accessibility reduce soil-testing adoption, justifying the need for rapid, on-site soil analysis.</p>
                    <a 
                      href="https://onlinelibrary.wiley.com/doi/10.1111/ajae.12513" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      https://onlinelibrary.wiley.com/doi/10.1111/ajae.12513
                    </a>
                  </div>
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-300 font-medium mb-2">Economic and Behavioral Factors Affecting Soil Testing Adoption Among Farmers</p>
                    <p className="text-sm mb-2">Shows that centralized lab testing discourages frequent soil testing, motivating decentralized, low-cost sensor-based systems.</p>
                    <a 
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0378429024003691" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      https://www.sciencedirect.com/science/article/abs/pii/S0378429024003691
                    </a>
                  </div>
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-300 font-medium mb-2">Precision Agriculture and Soil Nutrient Monitoring Systems</p>
                    <p className="text-sm mb-2">Emphasizes continuous soil nutrient monitoring for optimized fertilizer use and sustainability, aligning with our real-time sensing approach.</p>
                    <a 
                      href="https://journaljeai.com/index.php/JEAI/article/view/3385" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      https://journaljeai.com/index.php/JEAI/article/view/3385
                    </a>
                  </div>
                </div>
              </div>

              {/* Websites */}
              <div>
                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Online Resources & Websites
                </h3>
                <div className="space-y-3 ml-6 text-gray-400">
                  <div className="pb-3 border-b border-white/10">
                    <p className="text-gray-300 font-medium">Indian Council of Agricultural Research (ICAR)</p>
                    <a 
                      href="https://icar.org.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      https://icar.org.in
                    </a>
                  </div>
                  <div className="pb-3 border-b border-white/10">
                    <p className="text-gray-300 font-medium">Soil Health Card Scheme, Government of India</p>
                    <a 
                      href="https://soilhealth.dac.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      https://soilhealth.dac.gov.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Technical Standards */}
              <div>
                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Technical Standards
                </h3>
                <div className="ml-6 text-gray-400">
                  <p className="leading-relaxed">
                    The system is designed in alignment with commonly accepted agricultural soil testing parameters 
                    such as pH, electrical conductivity, and primary nutrients (N, P, K). Emphasis was placed on 
                    portability, rapid data availability, and ease of interpretation for field-level usage, 
                    complementing existing laboratory-based soil testing methods rather than replacing them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl px-12 py-8">
            <p className="text-2xl text-white mb-3">Thank You</p>
            <p className="text-gray-400">
              To everyone who contributed to making NutriScan Pro a reality. This project represents 
              the collective effort, knowledge, and passion of many individuals committed to sustainable agriculture.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}