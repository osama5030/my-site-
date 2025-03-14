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
        contact: 'Contact',
        faq: 'FAQ'
      },
      common: {
        language: 'English',
        getStarted: 'Get Started',
        bookNow: 'Book Now',
        submit: 'Submit',
        contactUs: 'Contact Us',
        loading: 'Loading...',
        dark_mode: 'Dark Mode',
        light_mode: 'Light Mode'
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
      },
      faq: {
        title: 'Frequently Asked Questions',
        description: 'Find answers to common questions about our services and travel requirements',
        flightBooking: {
          title: 'How to Book Confirmed Flights for Embassy?',
          content: 'When applying for a visa, one of the most important steps is submitting a flight reservation. We provide confirmed flight bookings for embassy purposes in a simple and secure way, without requiring full payment. We don\'t ask you to pay for the flight ticket upfront but provide you with a confirmed booking that meets embassy requirements. Choose us for verified embassy bookings, no upfront ticket payment, and a hassle-free experience.\n\nWhy Choose Us?\n\n• Confirmed Embassy Bookings: We provide reliable flight reservations that comply with embassy requirements.\n• No Ticket Payment Required: We book your flight without requiring full payment upfront, you only pay for the service.\n• Comfortable Experience: Everything will be ready for you without any hassle or worry.\n\nAll you need to do is follow our step-by-step process, and we\'ll be there to ensure everything is made easy for you.'
        },
        travelPlan: {
          title: 'How to Create an Outstanding Travel Plan?',
          content: 'One of the most important steps that will help you organize your trip professionally is preparing a travel plan. Many people don\'t know where to start or how to organize their plan optimally. If you\'re looking for an easy and effective way to organize your trip, we\'re here to help!\n\nWhat is a Travel Plan?\nA travel plan is simply organized schedules that determine the places you\'ll visit, travel dates, transportation methods, and includes all details about accommodation like hotels and tourist attractions.\n\nHow Can We Help You?\nOn our website, we provide you with a complete travel plan service, and we do this step by step to ensure you don\'t miss anything. We\'ll help you with:\n\n• Selecting tourist destinations that match your interests and preferences\n• Organizing a suitable schedule for each day of your trip\n• Booking ideal hotels based on your budget and needs\n• Confirmed flight bookings for embassy without upfront payment\n• Suggesting activities and tourist attractions you must visit in each city\n\nWhy Choose Us?\n\n• Ready and Organized Travel Plan: We provide a complete plan that makes it easy for you to choose places to visit\n• Guaranteed Bookings: We provide confirmed flight and hotel bookings\n• Comfortable and Easy Experience: With us, everything will be organized and carefully planned so you can enjoy your trip without any hassle'
        },
        coverLetter: {
          title: 'How to Write a Motivational Letter (Cover Letter) for Embassy?',
          content: 'One of the important steps in the visa application process is writing a motivation letter for the embassy. This is the letter you\'re required to submit with your documents, explaining the reason behind your desire to travel and the purpose of the trip. This letter must be written accurately and clearly to help you obtain the visa easily.\n\nWhat is a Motivation Letter?\nA motivation letter is a message directed to the embassy or consulate where you explain why you\'re traveling to the concerned country, clarify why you want to visit the country, and the duration you\'ll spend there. This letter should be convincing to show the embassy that your trip purpose is legal and temporary, and also includes your financial commitments that support your ability to travel.\n\nHow Can We Help You Write the Motivation Letter?\nWe provide a professional embassy motivation letter writing service that aligns with embassy requirements, including:\n\n• Customized Letter Writing: We\'ll help you write the letter in a formal and convincing style suitable for the embassy\n• Letter Preparation in English or Arabic: Based on the embassy\'s required language, we\'ll write the letter fluently and accurately\n• Including Necessary Details: Such as travel information, duration of stay, travel plan, and activities you\'ll do\n• Complete Review: We\'ll review the letter and ensure it\'s written correctly and won\'t be rejected\n\nWhy Choose Us?\n\n• Professionalism in Letter Writing: Our team specializes in writing official letters for embassies\n• Perfect Formatting: The letter will be organized clearly and convincingly\n• Modification Possibility: If any adjustments or changes are needed, we\'ll help you quickly and professionally'
        },
        hotelBooking: {
          title: 'How to Book Hotels Easily and Hassle-Free?',
          content: 'When you travel anywhere, hotel booking is the first important step to start your journey comfortably and safely. Booking a hotel correctly contributes to your travel comfort and saves you a lot of stress and problems that might occur during the trip. This includes proper hotel selection that matches your budget and needs, and also helps ensure you\'ll be in a safe and comfortable place throughout your stay.\n\nHow Can We Help You Book a Hotel?\nWe provide hotel booking services in various locations around the world with the best offers and competitive prices. How? We\'ll help you with every step of the booking process:\n\n• Suitable Hotel Selection: We\'ll help you choose the ideal hotel whether in a tourist city or business location\n• Best Offers: We provide special offers for early bookings or seasonal offers to get the best price\n• Instant Booking Confirmation: We\'ll confirm the booking with the hotel immediately, so you can rest assured your place is reserved\n• Hotel Reviews and Ratings: We\'ll help you choose the suitable hotel based on previous guests\' ratings to have a clear idea about the service level\n• Booking Organization: We complete the booking process on your behalf with all details, from arrival date to departure date\n\nWhy Choose Us?\n\n• Instant and Confirmed Booking: Booking with us is guaranteed, no need to worry\n• Special Offers: We\'ll provide you with exclusive offers on hotels\n• Distinguished Service: Our team is always ready to respond to your inquiries and help you every step of the way'
        },
        insurance: {
          title: 'Travel Insurance: What You Need to Know Before Traveling',
          content: 'When you travel, insurance is one of the most important things you need to consider to ensure your safety in case of any emergency during travel. Travel insurance protects you from sudden accidents or unexpected circumstances, whether health problems or other things like trip cancellation or luggage loss. Here at TripPrime, we provide completely free insurance with the embassy application if you choose the TripPrime 100 offer.\n\nWhat is TripPrime 100 Offer?\n\nTripPrime 100 offer is a distinguished package we provide to our clients and includes:\n\n• Embassy Application: Allows you to submit visa applications quickly and easily\n• Insurance: Free comprehensive travel insurance, covering everything from health accidents to emergencies, and things you might face during the trip\n• Travel Plan: We help you organize a complete travel plan from start to finish\n• Cover Letter: We provide you with a motivation letter for the embassy to facilitate the visa process\n• Flight and Hotel Bookings: We help you book flights and hotels in the places you choose\n\nHow Does Our Insurance Help You?\n\n• Health Protection: If you have any health problem during travel, insurance covers treatment costs and medications\n• Emergency Coverage: Insurance covers accidents that might happen during travel or unexpected accidents\n• Trip Cancellation or Luggage Loss: If something prevents you from traveling or you lose something important, insurance protects you\n• Peace of Mind: When you choose insurance, you\'ll be assured throughout your travel period that you\'re protected at any time\n\nWhy Choose TripPrime 100 Offer?\n\n• Comprehensive Service: From insurance to travel plans and hotel and flight bookings\n• Completely Free: Insurance is available free with TripPrime 100 offer\n• Saving Time and Effort: Everything under one roof, from embassy application to motivation letter and insurance\n• Peace of Mind: You can travel assured because everything is organized and done in the best way'
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
        contact: 'اتصل بنا',
        faq: 'الأسئلة الشائعة'
      },
      common: {
        language: 'عربي',
        getStarted: 'ابدأ الآن',
        bookNow: 'احجز الآن',
        submit: 'إرسال',
        contactUs: 'اتصل بنا',
        loading: 'جاري التحميل...',
        dark_mode: 'الوضع الداكن',
        light_mode: 'الوضع المضيء'
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
      },
      faq: {
        title: 'الأسئلة الشائعة',
        description: 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا ومتطلبات السفر',
        flightBooking: {
          title: 'ازاي تحجز طيران مؤكدة للسفارة؟',
          content: 'لما بتقدم على تأشيرة، واحدة من أهم الخطوات اللي بتعملها هي تقديم حجز طيران. وده ممكن يكون محير شوية لو ماكنتش عارف إزاي تعمل حجز أكيد بدون دفع المبلغ كامل. هنا في موقعنا، نقدم لك خدمة حجز طيران مؤكد للسفارة بشكل بسيط وآمن، وكل ده من غير ما تدفع أي فلوس.\n\nإحنا مش بنطلب منك تدفع تمن تذكرة الطيران من البداية، لكن بنوفر لك حجز طيران مؤكد واللي بتحتاجه السفارة علشان تضمن قبول طلب التأشيرة بتاعك. الحجز ده بيكون مخصص للسفارة وبيتم تأكيده بطريقة تضمن قبوله.\n\nليه تختارنا؟\n\n• حجز مؤكد للسفارة: نوفر لك حجز طيران موثوق ومتوافق مع شروط السفارات.\n• من غير ما تدفع تمن التذكرة: إحنا بنحجز لك تذكرة طيران بدون ما تدفع تمنها في البداية، وفقط تدفع ثمن الخدمة.\n• تجربة مريحة: كل حاجة هتكون جاهزة ليك من غير أي تعب أو قلق.\n\nكل اللي عليك إنك تتابع معانا خطوة بخطوة، وإحنا هنكون جنبك علشان تضمن إن كل حاجة تتسهل ليك.'
        },
        travelPlan: {
          title: 'إزاي تعمل خطة سفر مميزة؟',
          content: 'واحدة من أهم الخطوات اللي هتساعدك تنظم رحلتك بشكل محترف هي إعداد خطة سفر. لكن كتير من الناس مش عارفين منين يبدأوا أو إزاي ينظموا خطتهم بالشكل الأمثل. لو كنت بتدور على طريقة سهلة وفعّالة علشان تنظم رحلتك، إحنا هنا علشان نساعدك!\n\nإيه هي خطة السفر؟\nخطة السفر هي ببساطة جداول زمنية ومرتبة بتحدد الأماكن اللي هتزورها، والمواعيد اللي هتسافر فيها، ووسائل النقل، كمان تتضمن كل التفاصيل الخاصة بالأماكن اللي هتقيم فيها زي الفنادق، والمزارات السياحية.\n\nإزاي نقدر نساعدك؟\nإحنا في موقعنا بنقدم لك خدمة إعداد خطة سفر كاملة، وكل ده بنعمله ليك خطوة بخطوة علشان تضمن إنك مش هتفوت أي حاجة. مش بس كده، هنساعدك على:\n\n• اختيار الوجهات السياحية اللي بتناسب اهتماماتك وتفضيلاتك.\n• تنظيم جدول زمني مناسب لكل يوم من رحلتك، بحيث تتمتع بكل لحظة في سفرك.\n• حجز الفنادق المثالية بناءً على ميزانيتك واحتياجاتك.\n• حجز الطيران بشكل مؤكد للسفارة، من غير ما تدفع تمنه في البداية.\n• اقتراح الأنشطة والمزارات السياحية اللي لازم تزورها في كل مدينة.\n\nليه تختارنا؟\n\n• خطة سفر جاهزة ومرتبة: نحن نقدم لك خطة كاملة تسهل عليك اختيار الأماكن اللي هتزورها.\n• حجوزات مضمونة: إحنا بنوفر لك حجز طيران وفنادق بشكل مؤكد.\n• تجربة مريحة وميسرة: معانا، كل حاجة هتكون منظمة ومدروسة بشكل دقيق علشان تستمتع برحلتك من غير أي تعب.'
        },
        coverLetter: {
          title: 'إزاي تكتب خطاب تحفيزي للسفارة (cover letter)؟',
          content: 'واحدة من الخطوات المهمة في عملية التقديم على الفيزا هي كتابة خطاب تحفيز للسفارة. ده الخطاب اللي بيطلب منك تقديمه مع مستنداتك، وبيشرح السبب وراء رغبتك في السفر والهدف من الرحلة. الخطاب ده لازم يكون مكتوب بشكل دقيق وواضح علشان يساعدك على الحصول على الفيزا بسهولة.\n\nإيه هو خطاب التحفيز؟\nخطاب التحفيز هو رسالة موجهة للسفارة أو القنصلية بتوضح فيها سبب سفرك للبلد المعني، وتشرح فيه لماذا تريد زيارة البلد والمدة التي ستقضيها هناك. هذا الخطاب يجب أن يكون مقنعًا بحيث يُظهر للسفارة أن هدفك من الرحلة قانوني ومؤقت، ويشمل أيضًا التزاماتك المالية التي تدعم قدرتك على السفر.\n\nإزاي نقدر نساعدك في كتابة خطاب التحفيز؟\nإحنا بنوفر لك خدمة كتابة خطاب تحفيز للسفارة بشكل احترافي يتماشى مع متطلبات السفارة، وده يشمل:\n\n• كتابة خطاب مخصص: هنساعدك تكتب الخطاب بأسلوب رسمي ومقنع يتناسب مع السفارة.\n• إعداد خطاب باللغة الإنجليزية أو العربية: حسب اللغة المطلوبة في السفارة، هنكتب لك الخطاب بطلاقة ودقة.\n• تضمين التفاصيل اللازمة: زي معلومات السفر، مدة الإقامة، خطة الرحلة، والأنشطة التي ستقوم بها.\n• مراجعة كاملة: هنقوم بمراجعة الخطاب والتأكد من أنه مكتوب بشكل صحيح وغير قابل للرفض.\n\nليه تختارنا؟\n\n• احترافية في كتابة الخطابات: فريقنا متخصص في كتابة الخطابات الرسمية للسفارات.\n• تنسيق مثالي: الخطاب هيكون منظم بشكل واضح ومقنع.\n• إمكانية التعديل: لو في أي تعديلات أو تغييرات، هنساعدك بسرعة وباحتراف.'
        },
        hotelBooking: {
          title: 'إزاي تحجز فندق بسهولة وبدون مشاكل؟',
          content: 'أنت لما بتسافر لأي مكان، حجز الفندق هو أول خطوة مهمة علشان تبدأ رحلتك بشكل مريح وآمن. حجز فندق بشكل صحيح بيساهم في راحة سفرك وتوفر عليك كتير من التوتر والمشاكل اللي ممكن تحصل أثناء الرحلة. ده بيشمل الاختيار السليم للفندق اللي يتماشى مع ميزانيتك واحتياجاتك، وكمان يساعدك تتأكد إنك هتكون في مكان آمن ومرتاح طوال فترة إقامتك.\n\nإزاي نقدر نساعدك في حجز فندق؟\nإحنا بنقدم خدمة حجز فنادق في أماكن متنوعة حول العالم مع أفضل العروض وأسعار منافسة. إزاي؟ هنساعدك في كل خطوة من خطوات الحجز:\n\n• اختيار فندق مناسب: هنساعدك في اختيار الفندق المثالي سواء كان في مدينة سياحية أو مكان تجاري.\n• أفضل العروض: بنقدم لك العروض الخاصة بالحجوزات المبكرة أو العروض الموسمية للحصول على أفضل سعر.\n• تأكيد الحجز الفوري: هنقوم بتأكيد الحجز مع الفندق فورًا، وبالتالي تقدر ترتاح وتطمئن إن مكانك محجوز.\n• مراجعات وتقييمات الفنادق: هنساعدك تختار الفندق المناسب لك بناءً على تقييمات النزلاء السابقين علشان يكون لديك فكرة واضحة عن مستوى الخدمة.\n• تنظيم الحجز: بنقوم بإتمام عملية الحجز نيابة عنك بكل التفاصيل، من تاريخ الوصول حتى تاريخ المغادرة.\n\nليه تختارنا؟\n\n• حجز فوري ومؤكد: الحجز معانا مضمون، ولا داعي للقلق.\n• عروض مميزة: هنقدم لك أفضل العروض الحصرية على الفنادق.\n• خدمة متميزة: فريقنا دائمًا جاهز للرد على استفساراتك ومساعدتك في كل خطوة.'
        },
        insurance: {
          title: 'التأمين للسفر: إللي لازم تعرفه قبل ما تسافر',
          content: 'أنت لما بتسافر، التأمين بيكون من أهم الأشياء اللي لازم تأخذها في اعتبارك علشان تضمن سلامتك في حال حدوث أي طارئ أثناء السفر. التأمين للسفر بيحميك من الحوادث المفاجئة أو الظروف غير المتوقعة، سواء كانت مشاكل صحية أو أشياء تانية زي إلغاء الرحلة أو فقدان الأمتعة. لكن هنا في تريب برايم، إحنا بنقدملك تأمين مجاني تمامًا مع أبلكيشن السفارة لو اخترت عرض تريب برايم 100.\n\nإيه هو عرض تريب برايم 100؟\n\nعرض تريب برايم 100 هو باقة مميزة بنقدمها لعملائنا وتشمل:\n\n• أبلكيشن السفارة: بيتيح لك تقديم طلبات التأشيرات بشكل سريع وسهل.\n• التأمين: تأمين شامل للسفر مجانًا، يغطي كل شيء من الحوادث الصحية للطوارئ، والأشياء اللي ممكن تواجهها أثناء الرحلة.\n• خطة السفر: بنساعدك في تنظيم خطة سفر كاملة من البداية للنهاية.\n• كفر ليتر: بنقدم لك خطاب تحفيزي للسفارة لتسهيل عملية الحصول على التأشيرة.\n• حجز الطيران والفنادق: نساعدك في حجز الطيران والفنادق في الأماكن اللي بتختارها.\n\nإزاي يساعدك التأمين اللي بنقدمه؟\n\n• حماية صحية: لو حصلت لك أي مشكلة صحية أثناء السفر، التأمين بيغطي تكاليف العلاج والأدوية.\n• التغطية للطوارئ: التأمين بيغطي الحوادث اللي ممكن تحصل أثناء السفر أو الحوادث غير المتوقعة.\n• إلغاء الرحلة أو فقدان الأمتعة: لو حصل حاجة تمنعك من السفر أو ضاع منك شيء مهم، التأمين بيحميك.\n• راحة بالك: لما تختار التأمين، هتكون مطمئن طول فترة سفرك إنك محمي في أي وقت.\n\nليه تختار عرض تريب برايم 100؟\n\n• خدمة شاملة: من التأمين لخطط السفر وحجز الفنادق والطيران.\n• مجاني تمامًا: التأمين متاح مجانًا مع عرض تريب برايم 100.\n• توفير الوقت والمجهود: كل حاجة تحت سقف واحد، من أبلكيشن السفارة لخطاب التحفيز والتأمين.\n• راحة بالك: تقدر تسافر وانت مطمئن لأن كل شيء منظم ومعمول بأفضل طريقة.'
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
