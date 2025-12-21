"use client"
import { motion } from 'motion/react';
import { Home, AlertCircle } from 'lucide-react';
import { SafeLink } from '@/components/SafeLink';

export default function Error400Page() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden py-20 px-6">
        {/* Background Abstract Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Shape 1 - Navy Gradient */}
          <motion.div
            className="absolute"
            style={{
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(21, 21, 97, 0.08) 0%, rgba(21, 21, 97, 0.02) 50%, transparent 100%)',
              top: '-8%',
              right: '12%',
            }}
            animate={{
              y: [0, 35, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Floating Shape 2 - Red Gradient */}
          <motion.div
            className="absolute"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 0, 0, 0.06) 0%, rgba(255, 0, 0, 0.01) 50%, transparent 100%)',
              bottom: '12%',
              left: '15%',
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Floating Shape 3 - Small Navy */}
          <motion.div
            className="absolute"
            style={{
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(21, 21, 97, 0.04) 0%, transparent 70%)',
              top: '45%',
              right: '20%',
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-[780px] w-full relative z-10">
          <motion.div
            className="text-center space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Large Error Code */}
            <motion.h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '120px',
                fontWeight: 900,
                color: '#151561',
                letterSpacing: '-0.04em',
                lineHeight: '1',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              400
            </motion.h1>

            {/* Alert Icon */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                type: 'spring',
                stiffness: 200
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 0, 0, 0.08)',
                }}
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <AlertCircle 
                  className="w-14 h-14"
                  style={{ color: '#FF0000' }}
                />
              </motion.div>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '32px',
                fontWeight: 600,
                color: '#151561',
                letterSpacing: '-0.01em',
                lineHeight: '1.3',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              The request cannot be processed.
            </motion.h2>

            {/* Description */}
            <motion.p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#6B7280',
                lineHeight: '1.65',
                maxWidth: '560px',
                margin: '0 auto',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Please check the URL or try again.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex items-center justify-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {/* Primary CTA */}
              <SafeLink
                href="/"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[50px] transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
              >
                <Home className="w-5 h-5" />
                Back to Home
              </SafeLink>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}

      {/* Custom Styles */}
      <style>{`
        .group:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255, 0, 0, 0.35);
        }

        .group:hover svg {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
