import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useTheme } from '../hooks/useTheme';
import emailjs from 'emailjs-com';
import { countries } from 'countries-list';

const backgroundImages = [
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2000', // Paris
  'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2000', // Barcelona
  'https://images.unsplash.com/photo-1516494840440-5c5c76e3726e?auto=format&fit=crop&w=2000', // Austria
];

const services = [
  { id: 'travel-plans', name: 'Travel Plans', price: 20 },
  { id: 'cover-letters', name: 'Cover Letters', price: 30 },
  { id: 'flight-booking', name: 'Flight Booking', price: 30 },
  { id: 'hotel-booking', name: 'Hotel Booking', price: 20 },
  { id: 'tripPrime', name: 'TripPrime Package', price: 100 },
];

const sortedCountries = Object.entries(countries).map(([code, country]) => ({
  code,
  name: country.name,
})).sort((a, b) => a.name.localeCompare(b.name));

export function BookPage() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [formData, setFormData] = React.useState({
    fullName: '',
    passportNumber: '',
    jobTitle: '',
    jobDescription: '',
    travelDate: '',
    returnDate: '',
    destinationCountry: '',
    email: '',
    passportPhotos: null as File[] | null,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalPrice = React.useMemo(() => {
    return services
      .filter(service => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
  }, [selectedServices]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, passportPhotos: Array.from(e.target.files!) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'contact@triptrail.me', // This line is correct now. Sending the Email to contact@triptrail.me
        reply_to: formData.email, // Customer's email for reply
        from_name: formData.fullName, // Customer's name
        fullName: formData.fullName,
        email: formData.email,
        passportNumber: formData.passportNumber,
        jobTitle: formData.jobTitle,
        jobDescription: formData.jobDescription,
        travelDate: formData.travelDate,
        returnDate: formData.returnDate,
        destinationCountry: countries[formData.destinationCountry]?.name || 'N/A', // Use country name
        selectedServices: selectedServices.map(id => services.find(s => s.id === id)?.name).join(', ') || 'None', // Use service names
        totalPrice: totalPrice,
      };

      await emailjs.send(
        'service_rd74x8j',  // Replace with your EmailJS service ID
        'template_0fubvbr', // Replace with your EmailJS template ID
        templateParams,
        '_91grWQNmXJgtCQMo'     // Replace with your EmailJS user ID
      );

      alert('Booking successful! We have received your request and will be in touch shortly.');
      // Optionally, clear the form data after successful submission
      setFormData({
        fullName: '',
        passportNumber: '',
        jobTitle: '',
        jobDescription: '',
        travelDate: '',
        returnDate: '',
        destinationCountry: '',
        email: '',
        passportPhotos: null,
      });
      setSelectedServices([]);  // Clear selected services

    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error processing your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
              "rounded-lg p-8",
              theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
            )}
          >
            <h1 className={cn(
              "text-3xl font-bold mb-8 text-center",
              theme === 'dark' ? 'text-white' : 'text-gray-900',
              i18n.language === 'ar' ? 'font-arabic' : ''
            )}>
              Book Your Travel Services
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className={cn(
                  "text-xl font-semibold mb-4",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={cn(
                      "block text-sm font-medium mb-1",
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    )}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                      )}
                    />
                  </div>

                  <div>
                    <label className={cn(
                      "block text-sm font-medium mb-1",
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    )}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className={cn(
                    "block text-sm font-medium mb-1",
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  )}>
                    Passport Number
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    required
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                    )}
                  />
                </div>

                <div>
                  <label className={cn(
                    "block text-sm font-medium mb-1",
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  )}>
                    Passport Photos (First and Last Pages)
                  </label>
                  <input
                    type="file"
                    name="passportPhotos"
                    accept="image/*"
                    multiple
                    required
                    onChange={handleFileChange}
                    className={cn(
                      "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                    )}
                  />
                </div>

                <div>
                  <label className={cn(
                    "block text-sm font-medium mb-1",
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  )}>
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                    )}
                  />
                </div>

                <div>
                  <label className={cn(
                    "block text-sm font-medium mb-1",
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  )}>
                    Job Description
                  </label>
                  <textarea
                    name="jobDescription"
                    required
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className={cn(
                      "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                    )}
                  />
                </div>
              </div>

              {/* Travel Details */}
              <div className="space-y-4">
                <h2 className={cn(
                  "text-xl font-semibold mb-4",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  Travel Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={cn(
                      "block text-sm font-medium mb-1",
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    )}>
                      Travel Date
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      required
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                      )}
                    />
                  </div>

                  <div>
                    <label className={cn(
                      "block text-sm font-medium mb-1",
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    )}>
                      Return Date
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      required
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className={cn(
                    "block text-sm font-medium mb-1",
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  )}>
                    Destination Country
                  </label>
                  <select
                    name="destinationCountry"
                    required
                    value={formData.destinationCountry}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'
                    )}
                  >
                    <option value="">Select a country</option>
                    {sortedCountries.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <h2 className={cn(
                  "text-xl font-semibold mb-4",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  Select Services
                </h2>
                <div className="space-y-4">
                  {services.map(service => (
                    <label key={service.id} className="flex items-center justify-between p-3 rounded-lg border transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className={cn(
                            "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                          )}
                        />
                        <span className={cn(
                          "ml-2",
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        )}>
                          {service.name} (${service.price})
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className={cn(
                  "mt-4 p-4 rounded-lg",
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                )}>
                  <p className={cn(
                    "text-lg font-semibold",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    Selected Services: {selectedServices.length}
                  </p>
                  <p className={cn(
                    "text-xl font-bold",
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  )}>
                    Total Price: ${totalPrice}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || selectedServices.length === 0}
                  className={cn(
                    "px-8 py-3 rounded-full text-white font-semibold",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    "transition-colors duration-200",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    theme === 'dark'
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Book Now'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}