import { motion } from 'motion/react';
import { Mail, Users, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const teamMembers = [
    { name: 'Yug Bhimani', grade: '11', division: 'A', bio: 'App UI, Working model' },
    { name: 'Rahul Trivedi', grade: '11', division: 'A', bio: 'Coding, Working model' },
    { name: 'Manan Parsana', grade: '11', division: 'A', bio: 'Videos, Website' },
    { name: 'Darsh Ramani', grade: '11', division: 'A', bio: 'Poster, Working model' },
  ];

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
            Meet <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">The Team</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate group of innovators dedicated to transforming agriculture through science and technology.
          </p>
        </motion.div>

        {/* Group Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-4">
            <ImageWithFallback
              src="https://lh3.googleusercontent.com/u/0/d/1jVByMkWSAqWGg0Ftd6Ll0WwPDWYRC77O"
              alt="Team Photo"
              className="w-full h-auto object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-3xl text-white mb-2">AgriCore Dynamics Team</h3>
              <p className="text-emerald-400">Innovating for a sustainable future</p>
            </div>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                {/* Photo Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center"
                >
                  <Users className="text-white" size={40} />
                </motion.div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                      Grade: {member.grade}
                    </span>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm">
                      Division: {member.division}
                    </span>
                  </div>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 hover:border-emerald-500/50 transition-all duration-500">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30"
            >
              <Video className="text-white" size={40} />
            </motion.div>
            <h3 className="text-3xl text-white mb-4">Our Journey</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Watch how we transformed an idea into reality. From initial concepts to prototypes, 
              follow our development process and challenges overcome.
            </p>
            
            {/* YouTube Video Embed */}
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/KfMczOPg0XI"
                  title="AgriCore Dynamics Journey Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl">
            <Mail className="text-emerald-400" size={32} />
            <div className="text-left">
              <p className="text-sm text-gray-400 mb-1">Contact Us</p>
              <a
                href="mailto:ispc.agricoredynamics@snk.edu"
                className="text-xl text-white hover:text-emerald-400 transition-colors"
              >
                ispc.agricoredynamics@snk.edu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}