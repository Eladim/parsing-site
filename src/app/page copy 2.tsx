'use client';


import { useEffect, useRef, useState } from 'react';
import { useCountUp } from './useCountUp'; // import the hook
import Link from 'next/link';
import HotelLogosCarousel from '../app/components/HotelLogosCarousel';
import TourOperatorsLogosCarousel from '../app/components/TourOperatorsLogosCarousel';
import styles from './page.module.css'; // Import your CSS module

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const hotels = useCountUp(visible ? 51 : 0);
  const years = useCountUp(visible ? 24 : 0);
  const beds = useCountUp(visible ? 17650 : 0);
  const [showMore, setShowMore] = useState(false);
  const [showGridMore, setShowGridMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
       className="fixed top-0 left-0 right-0 z-50 bg-gray-100  backdrop-blur-md text-gray-900 translate-y-0 opacity-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logo4.png"
                alt="Parsing Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-4 px-4 z-40">
              <div className="flex flex-col space-y-4">
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
              </div>
            </div>
          )}
          <nav className="hidden md:flex space-x-4">
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
           {/* Language Toggle */}
          <div className="absolute top-4 right-1/2 translate-x-1/2 md:right-4 md:translate-x-0 z-50">
            <div className="flex items-center gap-3 text-sm font-medium text-white">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-900">
                {/* EN */}
                <span className={`px-2 ${lang === 'en' ? 'font-semibold underline' : 'text-gray-400'}`}>
                  EN
                </span>

                {/* Language Switch */}
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

                {/* BG */}
                <span className={`px-2 ${lang === 'bg' ? 'font-semibold underline' : 'text-gray-400'}`}>
                  BG
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section  id="home"
        className="relative min-h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        {/* Animated SVG Blob */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <svg
            className="w-[150%] h-[150%] absolute -top-1/4 -left-1/4 animate-blob"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(300,300)">
              <path
                d="M120,-152.1C152.7,-117.8,174.4,-76.3,183.3,-31.6C192.2,13.1,188.3,61.1,163.2,96.3C138.1,131.5,91.8,153.8,44.8,173.1C-2.1,192.4,-49.7,208.7,-88.6,192.4C-127.5,176.1,-157.7,127.1,-164.9,77.1C-172.2,27.1,-156.6,-23.9,-132.4,-67.4C-108.2,-111,-75.5,-147.1,-34.5,-165.7C6.6,-184.3,66.2,-185.6,120,-152.1Z"
                fill="url(#gradient)"
                opacity="0.35"
              />
            </g>
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 min-h-screen">
          <img src="/logo.png" alt="Parsing Logo" className="h-24 w-auto mb-6" />

          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
            {content[lang].heading}
          </h1>

          <p className="text-lg md:text-xl max-w-2xl drop-shadow-md animate-fade-in-up delay-[200ms]">
            {content[lang].subheading}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#services"
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {content[lang].learnMore}
            </Link>

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
            className="group mt-12 inline-flex items-center gap-2 px-6 py-3 border border-[#2EC7D6] text-[#2EC7D6] hover:bg-[#2EC7D6] hover:text-white transition-all duration-300 rounded-full font-semibold shadow-sm hover:shadow-md hover:scale-105"
          >
            {showMore
              ? lang === 'bg'
                ? 'Скрий'
                : 'Hide'
              : lang === 'bg'
                ? 'Всички услуги'
                : 'View all services'}

            <span
              className={`transform transition-transform duration-300 text-lg ${
                showMore ? 'rotate-180' : ''
              }`}
            >
              ↓
            </span>
          </button>
          

            <div
              className={`overflow-hidden transition-all duration-800 ${
                showMore ? 'max-h-[3400px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-16 mx-8">

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
              <section className="bg-gray-100 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {lang === 'bg' ? 'КАКВО ОЩЕ ПРАВИМ' : 'WHAT ELSE WE DO'}
                  </h2>
                  <div className="w-24 h-1 bg-red-500 mx-auto mb-8 rounded"></div>

                  {/* White content box */}
                  <div className="bg-white rounded-xl shadow-md p-8 text-left space-y-6">
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
              <img
                src="/partners/clock-pms+.png"
                alt="Clock PMS+"
                className="w-36 h-20 object-contain"
              />
            </div>

            {/* Creato PMS */}
            <div className="flex flex-col items-center">
              <img
                src="/partners/creato-pms.png"
                alt="Creato PMS"
                className="w-36 h-20 object-contain"
              />
            </div>

            {/* Eltour */}
            <div className="flex flex-col items-center">
              <img
                src="/partners/eltour.svg"
                alt="Eltour"
                className="w-36 h-20 object-contain"
              />
            </div>

                  {/* Opera PMS */}
            <div className="flex flex-col items-center">
              <img
                src="/partners/Oracle-Opera.png"
                alt="Opera"
                className="w-36 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </section>




      <section id="about" className="bg-gray-100 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-500 font-semibold tracking-wide uppercase mb-2">
            {lang === 'bg' ? 'За нас' : 'About Us'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {lang === 'bg' ? 'КОИ СМЕ НИЕ' : 'WHO WE ARE'}
          </h2>

          {/* White content box */}
           <div className="bg-white rounded-xl shadow-md p-8 text-left text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
            {(lang === 'bg'
              ? [
                  'Работим в сферата на Хотелското резервиране повече от 20 години. През всички тези години управляваме заетостта на над 40 хотела, като поддържаме различните канали, през които постъпват резервациите.',
                  'Нашата сила и услугата, която предлагаме е насочена към Хотели, които работят най-вече с Туроператори.',
                  'Ние организираме и поддържаме процесите по прехвърляне на резервациите от Туроператори и Агенции в Хотелския софтуер...',
                  'Предлагаме интеграция на Хотелския софтуер с Booking.com и със собствените канали, като например – хотелски сайт, call center и др.',
                  'Помагаме с анализи, справки, овербукинг, менажиране и манипулиране на данните...',
                  'Особено полезни сме за собственици на група от хотели и комплекси...',
                  'Разработваме и развиваме нашата услуга, за да бъдем максимално полезни на хотелите в тяхната ежедневна дейност.',
                ]
              : [
                  'We’ve been working in the hotel reservation industry for over 20 years, managing occupancy across more than 40 hotels through multiple reservation channels.',
                  'Our core service is built specifically for hotels that work with tour operators.',
                  'We organize and automate the process of transferring reservations from tour operators and agencies into hotel systems...',
                  'We integrate booking channels like Booking.com and direct sources such as hotel websites and call centers.',
                  'We support analytics, reporting, overbooking management, and data handling with precision and speed.',
                  'We are particularly valuable to hotel groups and complexes where efficiency and accuracy are essential.',
                  'Our tools are continuously evolving to meet the daily needs of modern hotels.',
                ]
            ).map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">✔</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <TourOperatorsLogosCarousel/>
      </section>
      <section id="operators" className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          <button
            onClick={() => setShowGridMore(prev => !prev)}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-[#2EC7D6] text-[#2EC7D6] hover:bg-[#2EC7D6] hover:text-white transition-all duration-300 rounded-full font-semibold shadow-sm hover:shadow-md hover:scale-105"
          >
            {showGridMore
              ? lang === 'bg'
                ? 'Скрий списъка'
                : 'Hide list'
              : lang === 'bg'
                ? 'Покажи всички'
                : 'Show all'}

            <span
              className={`transform transition-transform duration-300 text-lg ${
                showGridMore ? 'rotate-180' : ''
              }`}
            >
              ↓
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              showGridMore ? 'max-h-[3500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-16">
              {[list1, list2, list3, list4, list5, list6, list7, list8, list9].map(
                (group, i) => (
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
                )
              )}
            </div>
          </div>
        </div>

      </section>
      <section ref={ref} className="bg-[#2EC7D6] text-white py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Hotels */}
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <img
                src="/icons/hotel.svg"
                alt="Hotel"
                className="w-5 h-5"
                style={{ filter: 'invert(48%) sepia(98%) saturate(468%) hue-rotate(145deg) brightness(94%) contrast(90%)' }}
              />
              <span className="text-lg font-semibold text-[#2EC7D6]">{hotels}</span>
            </div>
            <span className="text-lg text-white">{statsLabels[lang].hotels}</span>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <img
                src="/icons/experience.svg"
                alt="Experience"
                className="w-5 h-5"
                style={{ filter: 'invert(48%) sepia(98%) saturate(468%) hue-rotate(145deg) brightness(94%) contrast(90%)' }}
              />
              <span className="text-lg font-semibold text-[#2EC7D6]">{years}</span>
            </div>
            <span className="text-lg text-white">{statsLabels[lang].experience}</span>
          </div>

          {/* Beds */}
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <img
                src="/icons/bed.svg"
                alt="Beds"
                className="w-5 h-5"
                style={{ filter: 'invert(48%) sepia(98%) saturate(468%) hue-rotate(145deg) brightness(94%) contrast(90%)' }}
              />
              <span className="text-lg font-semibold text-[#2EC7D6]">
                {beds.toLocaleString()}
              </span>
            </div>
            <span className="text-lg text-white">{statsLabels[lang].beds}</span>
          </div>

        </div>
      </section>





      <section >
        <div className="bg-gray-100 py-20 px-4"></div>
        <HotelLogosCarousel />
      </section>

      <section id="contact" className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-start justify-around gap-30">
            {[
              {
                icon: '/icons/email.svg',
                labelBg: 'Имейл',
                labelEn: 'Email',
                value: 'christian.atanasov@gmail.com',
                href: 'mailto:christian.atanasov@gmail.com',
              },
              {
                icon: '/icons/phone.svg',
                labelBg: 'Телефон',
                labelEn: 'Phone',
                value: '+359 884 699 600',
                href: 'tel:+359884699600',
              },
              {
                icon: '/icons/location.svg',
                labelBg: 'Адрес',
                labelEn: 'Location',
                value: 'Bansko, Bulgaria',
              },
            ].map(({ icon, labelBg, labelEn, value, href }, i) => (
              <div
                key={i}
                className="flex flex-1 min-w-[250px] max-w-[300px] items-center gap-4 text-gray-700 hover:text-blue-600 transition"
              >
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shrink-0">
                  <img src={icon} alt="" className="w-6 h-6 invert" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500">{lang === 'bg' ? labelBg : labelEn}</div>
                  {href ? (
                    <Link href={href} className="font-medium break-words">
                      {value}
                    </Link>
                  ) : (
                    <span className="font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}
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
          <div className="mx-auto text-left">
            <h4 className="text-white font-semibold mb-4">
              {lang === 'bg' ? 'Контакти' : 'Contact'}
            </h4>
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
