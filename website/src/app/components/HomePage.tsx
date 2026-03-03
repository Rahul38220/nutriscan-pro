import { motion } from 'motion/react';
import { ChevronDown, Leaf, Target, Zap, FileText, Image } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DocumentModal } from './DocumentModal';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'poster' | 'pdf';
    title: string;
  }>({
    isOpen: false,
    type: 'poster',
    title: ''
  });

  // TODO: Replace these URLs with your actual poster and PDF URLs
  const POSTER_URL = '/poster.jpg'; // Add your poster image URL here
  const REPORT_URL = '/report.pdf'; // Add your PDF report URL here

  const openPoster = () => {
    setModalState({
      isOpen: true,
      type: 'poster',
      title: 'Project Poster'
    });
  };

  const openReport = () => {
    setModalState({
      isOpen: true,
      type: 'pdf',
      title: 'Project Report'
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#0a1810]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497092801449-b782257c9756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmaWVsZCUyMGdyZWVuJTIwY3JvcHN8ZW58MXx8fHwxNzY2ODQxODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Agricultural Field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1810]/70 via-[#0a1810]/85 to-[#0a1810]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
            >
              <p className="text-emerald-400 text-sm font-medium">ISPC AgriCore Dynamics 2025</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight"
            >
              Revolutionizing Agriculture
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                One Field at a Time
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Empowering farmers with precision soil analysis through cutting-edge NPK and pH sensing technology.
              Real-time data, actionable insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <button
                onClick={() => onNavigate('product')}
                className="px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30"
              >
                Discover NutriScan Pro
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Meet the Team
              </button>
            </motion.div>

            {/* Project Documentation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={openPoster}
                className="group px-6 py-3 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/50 flex items-center gap-2"
              >
                <Image size={20} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                View Project Poster
              </button>
              <button
                onClick={openReport}
                className="group px-6 py-3 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/50 flex items-center gap-2"
              >
                <FileText size={20} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                View Project Report
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="text-emerald-400" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Document Modal */}
      <DocumentModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        type={modalState.type}
        url={modalState.type === 'poster' ? POSTER_URL : REPORT_URL}
      />

      {/* About ISPC Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a1810] to-[#0d1f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              About ISPC
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The Integrated Science Project Competition (ISPC) challenges students to apply interdisciplinary
              scientific knowledge to solve real-world problems. Our mission is to bridge the gap between
              theoretical science and practical agricultural innovation, creating sustainable solutions for
              tomorrow's farming challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Hook Section */}
      <section className="py-24 bg-[#0d1f14] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.5) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-8">
              The Challenge We're Solving
            </h2>
            <p className="text-2xl text-emerald-400 mb-6 max-w-4xl mx-auto leading-relaxed">
              "How can we help farmers optimize crop yields while reducing costs and environmental impact 
              through precise, real-time soil nutrient analysis?"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Target,
                title: 'Precision Agriculture',
                description: 'Moving beyond guesswork to data-driven farming decisions with accurate NPK and pH measurements.'
              },
              {
                icon: Zap,
                title: 'Real-Time Analysis',
                description: 'Instant soil health insights that empower farmers to take immediate corrective action.'
              },
              {
                icon: Leaf,
                title: 'Sustainable Future',
                description: 'Reducing chemical waste and environmental impact through targeted nutrient application.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-500 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-shadow duration-500"
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
