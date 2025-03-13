import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        book: 'Book',
        contact: 'Contact'
      },
      common: {
        language: 'English',
        getStarted: 'Get Started',
        bookNow: 'Book Now',
        submit: 'Submit',
        contactUs: 'Contact Us',
        loading: 'Loading...'
      },
      home: {
        title: 'Everything you need for your trip, all in one place!',
        description: 'Welcome to TripTrail; a leading company in the tourism field with over 5 years of experience, delivering tailored travel solutions to make your journey seamless and unforgettable.'
      },
      about: {
        title: 'About TripTrail',
        description: 'Pioneering the future of travel services since 2019. At TripTrail, we pride ourselves on being pioneers in the travel services industry for over 5 years. Our mission is to make travel simple, affordable, and stress-free. With our expertise, we have helped thousands of clients fulfill their travel dreams effortlessly.',
        team: {
          title: 'Meet Our Team',
          members: {
            osama: {
              name: 'Osama Taher',
              role: 'Founder & CEO'
            },
            ahmed: {
              name: 'Ahmed Hassan',
              role: 'Travel Operations Director'
            },
            maria: {
              name: 'Maria Rodriguez',
              role: 'Customer Experience Manager'
            },
            david: {
              name: 'David Chen',
              role: 'Technology Lead'
            }
          }
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'عن الشركة',
        services: 'خدماتنا',
        book: 'احجز',
        contact: 'اتصل بنا'
      },
      common: {
        language: 'عربي',
        getStarted: 'ابدأ الآن',
        bookNow: 'احجز الآن',
        submit: 'إرسال',
        contactUs: 'اتصل بنا',
        loading: 'جاري التحميل...'
      },
      home: {
        title: 'كل ما تحتاجه لرحلتك في مكان واحد!',
        description: 'مرحباً بكم في تريب تريل؛ شركة رائدة في مجال السياحة مع أكثر من 5 سنوات من الخبرة، نقدم حلول سفر مخصصة لجعل رحلتك سلسة ولا تُنسى.'
      },
      about: {
        title: 'عن تريب تريل',
        description: 'نقود مستقبل خدمات السفر منذ عام 2019. في تريب تريل، نفخر بكوننا روادًا في صناعة خدمات السفر لأكثر من 5 سنوات. مهمتنا هي جعل السفر بسيطًا وبأسعار معقولة وخالٍ من التوتر. بفضل خبرتنا، ساعدنا آلاف العملاء في تحقيق أحلام سفرهم بسهولة.',
        team: {
          title: 'تعرف على فريقنا',
          members: {
            osama: {
              name: 'أسامة طاهر',
              role: 'المؤسس والرئيس التنفيذي'
            },
            ahmed: {
              name: 'أحمد حسن',
              role: 'مدير عمليات السفر'
            },
            maria: {
              name: 'ماريا رودريغيز',
              role: 'مديرة تجربة العملاء'
            },
            david: {
              name: 'ديفيد تشن',
              role: 'مدير التكنولوجيا'
            }
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;