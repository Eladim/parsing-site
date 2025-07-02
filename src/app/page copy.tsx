'use client';


import { useEffect, useRef, useState } from 'react';
import { useCountUp } from './useCountUp'; // import the hook
import Link from 'next/link';
import HotelLogosCarousel from '../app/components/HotelLogosCarousel';



export default function Home() {
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const hotels = useCountUp(visible ? 51 : 0);
  const years = useCountUp(visible ? 24 : 0);
  const beds = useCountUp(visible ? 17650 : 0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setVisible(true);
          setHasAnimated(true); // prevent retriggering
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [hasAnimated]); // make sure this only reacts to changes in hasAnimated
  
  const statsLabels = {
    en: {
      hotels: 'Hotels',
      experience: 'Years of Experience',
      beds: 'Beds',
    },
    bg: {
      hotels: 'Хотели',
      experience: 'Години опит',
      beds: 'Легла',
    },
  };
  const [lang, setLang] = useState<'en' | 'bg'>('en');
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowHeader(window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const content = {
    en: {
      heading: "Welcome to Parsing",
      subheading: "Your Intuitive Channel Manager",
      learnMore: "Learn More",
      contact: "Contact Us",
    },
    bg: {
      heading: "Добре дошли в Парсинг",
      subheading: "Вашият Интуитивен Канален Мениджър",
      learnMore: "Научете повече",
      contact: "Свържете се с нас",
    },
  };
const list1 = [
  '5 VOR FLUG',
  'ALBENA TOUR',
  'ALEXANDRIA',
  'ALFA SERVICE',
  'ALLTOURS',
  'ALMA HOLIDAYS',
  'ALMA SERVICE',
  'ALTOUR (EUROTRAVEL)',
  'AMBIT',
  'AMIGOS TRAVEL'
];

const list2 = [
  'ANEX TOUR',
  'AVATAR',
  'AYA TRAVEL',
  'BIGXTRA',
  'BKTRAVEL',
  'BLUE STYLE CE',
  'BLUE STYLE PL',
  'BOIANA-MG',
  'BON TOUR',
  'BOOKING'
];

const list3 = [
  'BSA',
  'BYEBYE',
  'CASSIA TOUR',
  'CEDOK',
  'CLUB MAGELLAN',
  'CORENDON',
  'DERTOUR',
  'DERTOUR DE',
  'DM TRAVEL',
  'DTS DE'
];

const list4 = [
  'DTS RO',
  'EUROTOURS',
  'EXIM',
  'EXPEDIA',
  'FISCHER',
  'FIT REISEN',
  'FLAMINGO TOURS',
  'FLYING CARPET',
  'FRAM',
  'GO2HOLIDAY'
];

const list5 = [
  'HAPPY TOUR',
  'HOLIDAY PLANET',
  'HOTELBEDS',
  'IDS',
  'ITAKA',
  'ITS',
  'ITS BILLA REISEN',
  'ITS COOP TRAVEL',
  'JET2HOLIDAYS',
  'LTUR'
];

const list6 = [
  'LUXAIR',
  'MIKA TRAVEL',
  'NEKERA',
  'NEWSUN',
  'NOVATURAS',
  'NOVOTON',
  'NOY TRAVEL',
  'ODEON',
  'ONFIRE',
  'ORTHANNA'
];

const list7 = [
  'OTS',
  'P-GROUP',
  'PINGWIN',
  'PROFI-TOURS',
  'RAINBOW',
  'SATUR',
  'SCHAUINSLAND',
  'SHS',
  'SOLVEX',
  'SUNNY TOURS'
];

const list8 = [
  'SUN TOURS',
  'SUNWEB GROUP GMBH',
  'TEDDY KAM',
  'TEZ TOUR',
  'TOP20',
  'TRAVEL CARD',
  'TRAVEL PLANER',
  'TUI BELGIUM',
  'TUI DEUTSCHLAND',
  'TUI FRANCE'
];

const list9 = [
  'TUI NETHERLAND',
  'TUI NORDIC',
  'TUI POLAND',
  'TUI SUISSE',
  'TUI UK',
  'VARNA TS',
  'VING-NLTG',
  'W2M'
];




  return (
    <main>
      {/* Header menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white transition-all duration-500 ${
          showHeader ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Parsing Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <nav className="space-x-4">
              <Link href="#home" className="hover:underline">
                {lang === 'bg' ? 'Начало' : 'Home'}
              </Link>
            <Link href="#services" className="hover:underline">
              {lang === 'bg' ? 'Услуги' : 'Services'}
            </Link>
            <Link href="#about" className="hover:underline">
              {lang === 'bg' ? 'За нас' : 'About'}
            </Link>
            <Link href="#contact" className="hover:underline">
              {lang === 'bg' ? 'Контакт' : 'Contact'}
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section  id="home"
        className="relative min-h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 min-h-screen">
          <img src="/logo.png" alt="Parsing Logo" className="h-24 w-auto mb-6" />

          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {content[lang].heading}
          </h1>

          <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
            {content[lang].subheading}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded font-semibold shadow-lg"
            >
              {content[lang].learnMore}
            </Link>
            <Link
              href="#contact"
              className="border border-white hover:border-blue-300 hover:text-blue-300 transition px-6 py-3 rounded font-semibold"
            >
              {content[lang].contact}
            </Link>
          </div>

          {/* Language Toggle */}
          <div className="absolute top-4 right-4 z-50">
            <div className="flex items-center gap-3 text-sm font-medium text-white">
              <div className="relative">
                <span className={`px-2 ${lang === 'en' ? 'z-10 relative' : 'text-gray-400'}`}>
                  EN
                </span>
                {lang === 'en' && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-white bg-white/20 blur-sm -z-10" />
                )}
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={lang === 'bg'}
                  onChange={() => setLang(lang === 'en' ? 'bg' : 'en')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition-all" />
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full" />
              </label>

              <div className="relative">
                <span className={`px-2 ${lang === 'bg' ? 'z-10 relative' : 'text-gray-400'}`}>
                  BG
                </span>
                {lang === 'bg' && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-white bg-white/20 blur-sm -z-10" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {lang === 'bg' ? 'УСЛУГИ, КОИТО ПРЕДЛАГАМЕ' : 'OUR SERVICES'}
          </h2>
          <p className="text-gray-600 mb-12">
            {lang === 'bg'
              ? 'Управление на резервации за хотели с туроператорска заетост, както и канален мениджър за онлайн резервации'
              : 'Hotel reservation management, OTA/channel manager, and B2B integrations for modern hospitality businesses.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Reservation */}
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <img src="/icons/reservation.svg" alt="Reservation" className="w-6 h-6 object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {lang === 'bg' ? 'Резервации' : 'Reservations'}
              </h3>
              <p className="text-gray-600 text-sm">
                {lang === 'bg'
                  ? 'Следене и въвеждане на резервациите за всички туроператори, онлайн канали, хотелски сайт, както и изградена b2b връзка.'
                  : 'Tracking and entering reservations from tour operators, OTA channels, websites, and B2B integrations.'}
              </p>
            </div>

            {/* Card 2: Analytics */}
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <img
                    src="/icons/analytics.svg"
                    alt="Analytics"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {lang === 'bg' ? 'Анализи' : 'Analytics'}
              </h3>
              <p className="text-gray-600 text-sm">
                {lang === 'bg'
                  ? 'Предоставя анализи и статистики, свързани със заетостта в хотела, по пазари, туроператори, приходи и т.н.'
                  : 'Delivering reports and statistics on hotel performance by market, operator, revenue, and more.'}
              </p>
            </div>

            {/* Card 3: Voucher */}
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <img src="/icons/voucher.svg" alt="Voucher" className="w-6 h-6 object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {lang === 'bg' ? 'Ваучериране' : 'Voucher Management'}
              </h3>
              <p className="text-gray-600 text-sm">
                {lang === 'bg'
                  ? 'Подпомагаме ваучерирането с инструменти, които позволяват по-лесно, точно и бързо справяне с работата.'
                  : 'Tools that simplify and speed up voucher handling — precise and easy to use for your staff.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowMore(prev => !prev)}
            className="mt-12 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-300"
          >
            {showMore
              ? lang === 'bg'
                ? 'Скрий допълнителните услуги ↑'
                : 'Hide additional services ↑'
              : lang === 'bg'
                ? 'Всички услуги ↓'
                : 'View all services ↓'}
          </button>
          
          {showMore && (
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-16">
              {/* Email */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/email.svg" alt="Email" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{lang === 'bg' ? 'Имейл' : 'Email'}</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'Обработваме резервациите пристигнали към имейла на хотела.'
                    : 'Processing reservations arriving to the hotel’s email.'}
                </p>
              </div>

              {/* API */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/api.svg" alt="API" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">API</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'Канал за предаване на резервации чрез API.'
                    : 'Reservation delivery via API connection.'}
                </p>
              </div>

              {/* XML */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/xml.svg" alt="XML" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">XML</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'XML връзка за оператори като Booking.com, Expedia.com и др.'
                    : 'XML connectivity for Booking.com, Expedia.com, and more.'}
                </p>
              </div>

              {/* System Integrations */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/system.svg" alt="System" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {lang === 'bg' ? 'От системи' : 'System Feeds'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'Системи като TUI Destimo, Jit.travel и др.'
                    : 'Integrations like TUI Destimo, Jit.travel, and more.'}
                </p>
              </div>

              {/* Cloud Upload */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/cloud.svg" alt="Cloud" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {lang === 'bg' ? 'Облачни услуги' : 'Cloud Uploads'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'Файлове предавани през облачни услуги.'
                    : 'Files delivered via cloud services.'}
                </p>
              </div>

              {/* Web Site */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/web.svg" alt="Website" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Site</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'За резервации направени през сайта на хотела.'
                    : 'For bookings made through the hotel’s website.'}
                </p>
              </div>

              {/* B2B */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/b2b.svg" alt="B2B" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">B2B</h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'B2B система за предаване на резервации и проверка на статуса.'
                    : 'B2B delivery and status tracking of operator reservations.'}
                </p>
              </div>

              {/* Reports */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/report.svg" alt="Reports" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {lang === 'bg' ? 'Справки' : 'Reports'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'Изготвяме справки, анализи и статистики.'
                    : 'We prepare detailed reports, analytics, and statistics.'}
                </p>
              </div>

              {/* Invoicing */}
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                    <img src="/icons/invoice.svg" alt="Invoice" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {lang === 'bg' ? 'Фактуриране' : 'Invoicing'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'bg'
                    ? 'Подпомага и улеснява процеса на фактуриране.'
                    : 'Supports and simplifies your invoicing process.'}
                </p>
              </div>
              </div>
            <section className="bg-white py-20 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {lang === 'bg' ? 'КАКВО ОЩЕ ПРАВИМ' : 'WHAT ELSE WE DO'}
                </h2>
                <div className="w-24 h-1 bg-red-500 mx-auto mb-8 rounded"></div>

                <div className="bg-gray-100/70 backdrop-blur-md rounded-xl shadow-md p-8 text-left space-y-6">
                  {[
                    lang === 'bg'
                      ? 'Автоматизираме и прецизираме процеса на резервационния поток.'
                      : 'We automate and refine the reservation flow process.',
                    lang === 'bg'
                      ? 'Улесняваме Вашата ежедневна работа, като се ангажираме с точното и навременно въвеждане на резервациите, промените и анулациите.'
                      : 'We simplify your daily tasks by ensuring accurate and timely entry of reservations, changes, and cancellations.',
                    lang === 'bg'
                      ? 'Намаляваме времето, което е необходимо на Вас или екипа Ви за резервационния процес с около 90%.'
                      : 'We reduce the time your team spends on reservation processes by approximately 90%.',
                    lang === 'bg'
                      ? 'Създаваме възможност за проследяване на статуси на туроператори и партньори през онлайн портали, без да са нужни разговори или имейли.'
                      : 'We enable tracking of operator and partner reservation statuses via online portals without the need for calls or emails.',
                    lang === 'bg'
                      ? 'Предоставяме анализи и статистики, свързани със заетостта, пазарите, операторите и приходите, с допълнителна филтрация по Ваши критерии.'
                      : 'We provide analyses and statistics on occupancy, markets, operators, and revenue, with optional filtering based on your criteria.',
                    lang === 'bg'
                      ? 'Подпомагаме и улесняваме процеса на фактуриране.'
                      : 'We support and streamline your invoicing process.'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl mt-1">✔</span>
                      <p className="text-gray-700 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            </div>
            
                    
          )}
        </div>
      </section>

      <section id="hotel-systems" className="bg-slate-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'bg' ? 'ХОТЕЛСКИ СИСТЕМИ' : 'HOTEL SYSTEMS'}
          </h2>
          <p className="text-gray-300 mb-12">
            {lang === 'bg' ? 'С които работим:' : 'We work with the following systems:'}
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            {/* Clock PMS+ */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg font-medium">Clock PMS+</p>
              <img
                src="/partners/clock-pms+.png"
                alt="Clock PMS+"
                className="w-36 h-20 object-contain"
              />
            </div>

            {/* Creato PMS */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg font-medium">Creato PMS</p>
              <img
                src="/partners/creato-pms.png"
                alt="Creato PMS"
                className="w-36 h-20 object-contain"
              />
            </div>

            {/* Eltour */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg font-medium">Eltour</p>
              <img
                src="/partners/eltour.svg"
                alt="Eltour"
                className="w-36 h-20 object-contain"
              />
            </div>

                  {/* Opera PMS */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg font-medium">Oracle-Opera</p>
              <img
                src="/partners/Oracle-Opera.png"
                alt="Opera"
                className="w-36 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-500 font-semibold tracking-wide uppercase mb-2">
            {lang === 'bg' ? 'За нас' : 'About Us'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {lang === 'bg' ? 'КОИ СМЕ НИЕ' : 'WHO WE ARE'}
          </h2>
          <div className="text-left text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
            {lang === 'bg' ? (
              <>
                <p>
                  Работим в сферата на Хотелското резервиране повече от 20 години. През всички тези години управляваме заетостта на над 40 хотела, като поддържаме различните канали, през които постъпват резервациите.
                </p>
                <p>
                  Нашата сила и услугата, която предлагаме е насочена към Хотели, които работят най-вече с Туроператори.
                </p>
                <p>
                  Ние организираме и поддържаме процесите по прехвърляне на резервациите от Туроператори и Агенции в Хотелския софтуер...
                </p>
                <p>
                  Предлагаме интеграция на Хотелския софтуер с Booking.com и със собствените канали, като например – хотелски сайт, call center и др.
                </p>
                <p>
                  Помагаме с анализи, справки, овербукинг, менажиране и манипулиране на данните...
                </p>
                <p>
                  Особено полезни сме за собственици на група от хотели и комплекси...
                </p>
                <p>
                  Разработваме и развиваме нашата услуга, за да бъдем максимално полезни на хотелите в тяхната ежедневна дейност.
                </p>
              </>
            ) : (
              <>
                <p>
                  We’ve been working in the hotel reservation industry for over 20 years, managing occupancy across more than 40 hotels through multiple reservation channels.
                </p>
                <p>
                  Our core service is built specifically for hotels that work with tour operators.
                </p>
                <p>
                  We organize and automate the process of transferring reservations from tour operators and agencies into hotel systems...
                </p>
                <p>
                  We integrate booking channels like Booking.com and direct sources such as hotel websites and call centers.
                </p>
                <p>
                  We support analytics, reporting, overbooking management, and data handling with precision and speed.
                </p>
                <p>
                  We are particularly valuable to hotel groups and complexes where efficiency and accuracy are essential.
                </p>
                <p>
                  Our tools are continuously evolving to meet the daily needs of modern hotels.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Hotels */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex justify-center items-center">
                <img src="/icons/hotel.svg" className="w-7 h-7 invert brightness-200" alt="Hotel" />
              </div>
            </div>
            <div className="text-4xl font-bold">{hotels}</div>
            <div className="text-lg">{statsLabels[lang].hotels}</div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex justify-center items-center">
                <img src="/icons/experience.svg" className="w-7 h-7 invert brightness-200" alt="Experience" />
              </div>
            </div>
            <div className="text-4xl font-bold">{years}</div>
            <div className="text-lg">{statsLabels[lang].experience}</div>
          </div>

          {/* Beds */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex justify-center items-center">
                <img src="/icons/bed.svg" className="w-7 h-7 invert brightness-200" alt="Beds" />
              </div>
            </div>
            <div className="text-4xl font-bold">{beds.toLocaleString()}</div>
            <div className="text-lg">{statsLabels[lang].beds}</div>
          </div>
        </div>
      </section>
      <section id="operators" className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 font-semibold uppercase tracking-wide mb-2">
            {lang === 'bg' ? 'Туроператори' : 'Tour Operators'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {lang === 'bg' ? 'Които обработваме директно' : 'We Handle Directly'}
          </h2>

          <p className="text-gray-600 mb-10">
            {lang === 'bg'
              ? 'Пълен списък с партньорски агенции и оператори, с които работим ежедневно.'
              : 'A complete list of partner agencies and tour operators we work with daily.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[  list1, list2, list3, list4, list5,
                list6, list7, list8, list9, ].map((group, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform text-left space-y-2"
              >
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="text-gray-800 font-medium transition-colors hover:text-blue-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </section>
      <section>
        <HotelLogosCarousel />
      </section>

      <section id="contact" className="bg-gray-100 py-20 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-red-500 font-semibold uppercase tracking-wide mb-2">
      {lang === 'bg' ? 'Контакти' : 'Contact'}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
      {lang === 'bg' ? 'Свържете се с нас' : 'Get in Touch'}
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-around gap-10">
      {/* Email */}
      <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition">
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
          <img src="/icons/email.svg" alt="Email" className="w-6 h-6 invert" />
        </div>
        <div className="text-left">
          <div className="text-sm text-gray-500">{lang === 'bg' ? 'Имейл' : 'Email'}</div>
          <Link href="mailto:christian.atanasov@gmail.com" className="font-medium">
            christian.atanasov@gmail.com
          </Link>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition">
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
          <img src="/icons/phone.svg" alt="Phone" className="w-6 h-6 invert" />
        </div>
        <div className="text-left">
          <div className="text-sm text-gray-500">{lang === 'bg' ? 'Телефон' : 'Phone'}</div>
          <Link href="tel:+359884699600" className="font-medium">
            +359 884 699 600
          </Link>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition">
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
          <img src="/icons/location.svg" alt="Location" className="w-6 h-6 invert" />
        </div>
        <div className="text-left">
          <div className="text-sm text-gray-500">{lang === 'bg' ? 'Адрес' : 'Location'}</div>
          <span className="font-medium">Bansko, Bulgaria</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">{lang === 'bg' ? 'За Нас' : 'About Us'}</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white transition">{lang === 'bg' ? 'Кои сме ние' : 'Who We Are'}</Link></li>
              <li><Link href="#services" className="hover:text-white transition">{lang === 'bg' ? 'Услуги' : 'Services'}</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">{lang === 'bg' ? 'Контакти' : 'Contact'}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{lang === 'bg' ? 'Контакти' : 'Contact'}</h4>
            <ul className="space-y-2">
              <li>🧭 Bansko, Bulgaria</li>
              <li>📞 +359 884 699 600</li>
              <li>✉️ christian.atanasov@gmail.com</li>
            </ul>
          </div>

          {/* Optional Socials or Logo */}
          <div className="flex flex-col items-start md:items-end">
            <img src="/logo.png" alt="Parsing" className="h-10 mb-4" />
            <div className="flex space-x-4">
              {/* Placeholder for future social icons */}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} All rights reserved Parsing
        </div>
      </footer>



    </main>
  );
}
