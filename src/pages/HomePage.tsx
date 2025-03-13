import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { Globe2 } from 'lucide-react';
import { cn } from '../utils/cn';

const backgroundImages = [
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=2000'
];

export function HomePage() {
  const { t, i18n } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const globeSpring = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 20000 }
  });

  const handleGetStarted = async () => {
    setIsLoading(true);
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Navigate to services page
    window.location.href = '/services';
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <animated.div style={globeSpring}>
              <Globe2 className="h-16 w-16 text-blue-400" />
            </animated.div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
              alt="Schengen Flag"
              className="h-8 ml-4"
            />
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6",
              i18n.language === 'ar' ? 'leading-relaxed' : 'leading-tight'
            )}
          >
            {t('home.title')}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            {t('home.description')}
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={handleGetStarted}
            className={cn(
              "bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold",
              "hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('common.loading')}
              </span>
            ) : (
              t('common.getStarted')
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}