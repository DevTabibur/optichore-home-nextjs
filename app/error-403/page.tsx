"use client"
import { motion } from 'motion/react';
import { Home, ShieldAlert } from 'lucide-react';
import { SafeLink } from '@/components/SafeLink';


export default function Error403Page() {
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
              top: '-10%',
              left: '5%',
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
              bottom: '10%',
              right: '8%',
            }}
            animate={{
              y: [0, -35, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-[780px] w-full relative z-10">
          <motion.div
            className="text-center space-y-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Large Error Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '120px',
                  fontWeight: 900,
                  color: '#151561',
                  letterSpacing: '-0.04em',
                  lineHeight: '1',
                }}
              >
                403
              </h1>
            </motion.div>

            {/* Shield Icon */}
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
              <div
                className="inline-flex items-center justify-center"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 0, 0, 0.08)',
                }}
              >
                <ShieldAlert 
                  className="w-14 h-14"
                  style={{ color: '#FF0000' }}
                />
              </div>
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
              You don&apos;t have permission to access this page.
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
              Please contact your administrator if you believe this is an error.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center justify-center gap-5 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {/* Primary CTA */}
              <SafeLink
                href="#login"
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
                Go to Login
              </SafeLink>

              {/* Secondary Link */}
              <SafeLink
                href="/"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[50px] transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                  color: '#151561',
                  border: '1.5px solid #151561',
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
        }

        .group:hover svg {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
