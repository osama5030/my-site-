import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const teamMembers = [
  {
    id: 'osama',
    image: 'https://i.postimg.cc/jdhkqHM8/340620687-112398945139986-7550693663103764636-n.jpg',
    nameKey: 'about.team.members.osama.name',
    roleKey: 'about.team.members.osama.role'
  },
  {
    id: 'ahmed',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    nameKey: 'about.team.members.ahmed.name',
    roleKey: 'about.team.members.ahmed.role'
  },
  {
    id: 'maria',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400',
    nameKey: 'about.team.members.maria.name',
    roleKey: 'about.team.members.maria.role'
  },
  {
    id: 'david',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400',
    nameKey: 'about.team.members.david.name',
    roleKey: 'about.team.members.david.role'
  }
];

export function AboutPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className={cn(
            "text-4xl font-bold text-gray-900 mb-8",
            i18n.language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('about.title')}
          </h1>
          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto mb-16",
            i18n.language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('about.description')}
          </p>
        </motion.div>

        <div>
          <h2 className={cn(
            "text-3xl font-bold text-gray-900 mb-12 text-center",
            i18n.language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('about.team.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={t(member.nameKey)}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className={cn(
                    "text-xl font-semibold text-gray-900 mb-2",
                    i18n.language === 'ar' ? 'font-arabic' : ''
                  )}>
                    {t(member.nameKey)}
                  </h3>
                  <p className={cn(
                    "text-gray-600",
                    i18n.language === 'ar' ? 'font-arabic' : ''
                  )}>
                    {t(member.roleKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}