import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { cn } from '../utils/cn';
import emailjs from 'emailjs-com'; // Import EmailJS

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({  // Add form data state
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: 'contact@triptrail.me', // Your email address
      };

      await emailjs.send(
        'service_rd74x8j', // Replace with your EmailJS service ID
        'template_zgasgjd', // Replace with your EmailJS template ID
        templateParams,
        '_91grWQNmXJgtCQMo' // Replace with your EmailJS user ID
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      text: 'contact@triptrail.me',
      href: 'mailto:contact@triptrail.me?subject=Inquiry from TripTrail',
    },
    {
      icon: Phone,
      text: '+201286804397',
      href: 'https://wa.me/201286804397',
    },
    {
      icon: Phone,
      text: '+201280791996',
      href: 'https://wa.me/201280791996',
    },
    {
      icon: MapPin,
      text: 'Taborowa Street 63, 02-699 Warsaw, Poland',
      href: 'https://maps.google.com/?q=Taborowa+Street+63,+02-699+Warsaw,+Poland',
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9:00 AM - 6:00 PM (CET)',
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={cn(
            "text-4xl font-bold text-gray-900 mb-4",
            i18n.language === 'ar' ? 'font-arabic' : ''
          )}>
            Get in Touch
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-600">{item.text}</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-4 py-2 rounded-md text-white font-semibold",
                    "bg-blue-600 hover:bg-blue-700",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    "transition-colors duration-200",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}