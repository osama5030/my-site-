import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useTheme } from '../hooks/useTheme';

interface FAQArticle {
  id: string;
  image: string;
  titleKey: string;
  contentKey: string;
}

const articles: FAQArticle[] = [
  {
    id: 'flight-booking',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    titleKey: 'faq.flightBooking.title',
    contentKey: 'faq.flightBooking.content'
  },
  {
    id: 'travel-plan',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    titleKey: 'faq.travelPlan.title',
    contentKey: 'faq.travelPlan.content'
  },
  {
    id: 'cover-letter',
    image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=1200&q=80',
    titleKey: 'faq.coverLetter.title',
    contentKey: 'faq.coverLetter.content'
  },
  {
    id: 'hotel-booking',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    titleKey: 'faq.hotelBooking.title',
    contentKey: 'faq.hotelBooking.content'
  },
  {
    id: 'insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    titleKey: 'faq.insurance.title',
    contentKey: 'faq.insurance.content'
  }
];

export function FAQPage() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={cn("text-4xl font-bold mb-4", isRTL && "font-arabic")}>
            {t('faq.title')}
          </h1>
          <p className={cn("text-lg text-gray-600 dark:text-gray-300", isRTL && "font-arabic")}>
            {t('faq.description')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className={cn("grid grid-cols-1 lg:grid-cols-2", isRTL && "lg:rtl")}>
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={article.image}
                    alt={t(article.titleKey)}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className={cn("p-8", isRTL && "text-right")}>
                  <h2 className={cn("text-2xl font-semibold mb-4", isRTL && "font-arabic")}>
                    {t(article.titleKey)}
                  </h2>
                  <p className={cn("text-gray-700 dark:text-gray-300 leading-relaxed", isRTL && "font-arabic")}>
                    {t(article.contentKey).split('\n\n').map((paragraph, idx) => (
                      <span key={idx} className="block mb-4">
                        {paragraph}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
