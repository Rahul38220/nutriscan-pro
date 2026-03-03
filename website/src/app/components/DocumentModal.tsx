import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'poster' | 'pdf';
  url?: string;
}

export function DocumentModal({ isOpen, onClose, title, type, url }: DocumentModalProps) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 bg-[#0a1810] border border-emerald-500/30 rounded-2xl z-50 flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500/20 bg-[#0d1f14]">
              <h2 className="text-xl sm:text-2xl text-white font-medium">{title}</h2>
              <div className="flex items-center gap-2">
                {type === 'poster' && (
                  <>
                    <button
                      onClick={handleZoomOut}
                      className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                      aria-label="Zoom out"
                    >
                      <ZoomOut size={20} />
                    </button>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                      aria-label="Zoom in"
                    >
                      <ZoomIn size={20} />
                    </button>
                  </>
                )}
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-4">
              {url ? (
                type === 'poster' ? (
                  <div className="flex items-center justify-center min-h-full">
                    <motion.img
                      src={url}
                      alt={title}
                      style={{ scale: zoom }}
                      transition={{ type: 'spring', damping: 20 }}
                      className="max-w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                ) : (
                  <iframe
                    src={url}
                    className="w-full h-full rounded-lg"
                    title={title}
                  />
                )
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center max-w-md">
                    <div className="w-24 h-24 mx-auto mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white mb-3">Document Not Available</h3>
                    <p className="text-gray-400 mb-6">
                      {type === 'poster' 
                        ? 'The project poster will be displayed here. Please upload your poster image.'
                        : 'The project report will be displayed here. Please upload your PDF document.'
                      }
                    </p>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-left">
                      <p className="text-sm text-emerald-400 font-medium mb-2">To add your {type}:</p>
                      <ol className="text-sm text-gray-400 space-y-1 list-decimal list-inside">
                        <li>Upload your {type === 'poster' ? 'image' : 'PDF'} to your hosting service</li>
                        <li>Update the URL in the HomePage component</li>
                        <li>The {type} will appear here automatically</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
