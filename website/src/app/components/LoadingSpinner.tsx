import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#0a1810] flex items-center justify-center z-50">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full"
      />
    </div>
  );
}
