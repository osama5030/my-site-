import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plane, FileText, Hotel, Package } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTheme } from '../hooks/useTheme';

const services = [
  {
    id: 'travel-plans',
    icon: FileText,
    price: 20,
    description: 'Customized travel itineraries tailored to your preferences.',
    details: false
  },
  {
    id: 'cover-letters',
    icon: FileText,
    price: 30,
    description: 'Professional cover letters for visa applications.',
    details: false
  },
  {
    id: 'flight-booking',
    icon: Plane,
    price: 30,
    description: 'Confirmed flight bookings at the best prices.',
    details: false
  },
  {
    id: 'hotel-booking',
    icon: Hotel,
    price: 20,
    description: 'Guaranteed hotel reservations worldwide.',
    details: false
  },
  {
    id: 'TripPrime',
    icon: Package,
    price: 100,
    description: 'Embassy App + Hotel Reservations + Flight Reservations + Travel Insurance + Travel Plan + Cover Letter',
    details: false
  }
];

const backgroundImages = [
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2000', // Paris
  'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2000', // Barcelona
];

export function ServicesPage() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />

      <div className={cn(
        "relative z-10 min-h-screen py-16 px-4 sm:px-6 lg:px-8",
        theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'
      )}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className={cn(
              "text-4xl font-bold mb-4",
              theme === 'dark' ? 'text-white' : 'text-gray-900',
              i18n.language === 'ar' ? 'font-arabic' : ''
            )}>
              Our Services
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  "rounded-lg p-6 transition-shadow duration-300",
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:shadow-lg hover:shadow-blue-500/20' 
                    : 'bg-white hover:shadow-xl'
                )}
              >
                <div className="flex justify-center mb-6">
                  <service.icon className={cn(
                    "h-12 w-12",
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  )} />
                </div>
                <h3 className={cn(
                  "text-xl font-semibold mb-4 text-center",
                  theme === 'dark' ? 'text-white' : 'text-gray-900',
                  i18n.language === 'ar' ? 'font-arabic' : ''
                )}>
                  {service.id}
                </h3>
                {service.price && (
                  <p className={cn(
                    "text-2xl font-bold text-center mb-4",
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  )}>
                    ${service.price}
                  </p>
                )}
                <p className={cn(
                  "text-center",
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                )}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}