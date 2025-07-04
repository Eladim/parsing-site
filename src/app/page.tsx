'use client';


import { useEffect, useRef, useState } from 'react';
import { useCountUp } from './useCountUp'; // import the hook
import Link from 'next/link';
import HotelLogosCarousel from '../app/components/HotelLogosCarousel';
import TourOperatorsLogosCarousel from '../app/components/TourOperatorsLogosCarousel';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const hotels = useCountUp(visible ? 71 : 0);
  const years = useCountUp(visible ? 28 : 0);
  const beds = useCountUp(visible ? 21650 : 0);
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

  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'bg' || storedLang === 'en') {
      setLang(storedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'bg' : 'en';
    setLang(newLang);
    localStorage.setItem('preferredLang', newLang);
  };


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
            className="md:hidden  focus:outline-none"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 backdrop-blur-md py-4 px-4 z-40">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="text-[#2EC7D6] hover:underline">
                {lang === 'bg' ? 'Начало' : 'Home'}
              </Link>
              <Link href="#services" className="text-[#2EC7D6] hover:underline">
                {lang === 'bg' ? 'Услуги' : 'Services'}
              </Link>
              <Link href="#about" className="text-[#2EC7D6] hover:underline">
                {lang === 'bg' ? 'За нас' : 'About'}
              </Link>
              <Link href="#contact" className="text-[#2EC7D6] hover:underline">
                {lang === 'bg' ? 'Контакт' : 'Contact'}
              </Link>
              <Link
                href="https://home.parsing.eu/"
                className="text-[#2EC7D6] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === 'bg' ? 'Вход' : 'Login'}
              </Link>
            </div>
          </div>
          )}
          <nav className="hidden md:flex space-x-4">
              <Link href="#home" className="hover:underline text-[#2EC7D6]">
                {lang === 'bg' ? 'Начало' : 'Home'}
              </Link>
            <Link href="#services" className="hover:underline text-[#2EC7D6]">
              {lang === 'bg' ? 'Услуги' : 'Services'}
            </Link>
            <Link href="#about" className="hover:underline text-[#2EC7D6]">
              {lang === 'bg' ? 'За нас' : 'About'}
            </Link>
            <Link href="#contact" className="hover:underline text-[#2EC7D6]">
              {lang === 'bg' ? 'Контакт' : 'Contact'}
            </Link>
            <Link
              href="https://home.parsing.eu/"
              className="text-[#2EC7D6] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === 'bg' ? 'Вход' : 'Login'}
            </Link>
          </nav>
            {/* Language Toggle */}
          <div className="absolute top-4 right-1/2 translate-x-1/2 md:right-4 md:translate-x-0 z-50">
            <div className="flex items-center gap-3 text-sm font-medium text-white">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-900">
                
                {/* EN */}
                  <span className={`px-2 ${lang === 'en' ? 'font-semibold underline decoration-[#2EC7D6] text-[#2EC7D6]' : 'text-gray-400'}`}>
                    EN
                  </span>

                {/* Language Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={lang === 'bg'}
                    onChange={toggleLang}
                    className="sr-only peer"
                  />
                  {/* Switch track */}
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2EC7D6] rounded-full peer-checked:bg-[#2EC7D6] transition-all" />
                  {/* Toggle thumb */}
                  <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full" />
                </label>

                {/* BG */}
                  <span className={`px-2 ${lang === 'bg' ? 'font-semibold underline decoration-[#2EC7D6] text-[#2EC7D6]' : 'text-gray-400'}`}>
                    BG
                  </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center min-h-screen px-4 py-20 gap-12">
          
          {/* LEFT: Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                              {lang === 'bg'
                  ? 'Интелигентно решение за Вашия Ваканционен хотел'
                  : 'Smart Solution to Your Leisure Hotel'}
            </h1>
            <p className="text-lg md:text-xl text-[#2EC7D6] font-medium">
              {lang === 'bg'
                ? 'Обработва над 95% от всички резервации, независимо как са получени'
                : 'Handles over 95% of all bookings regardless of how they are received'}
            </p>
            <div>
              <Link
                href="#about-1"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-[#2EC7D6] text-[#2EC7D6] hover:bg-[#2EC7D6] hover:text-white transition-all duration-300 rounded-full font-semibold shadow-sm hover:shadow-md hover:scale-105"
              >
                {content[lang].learnMore}
              </Link>
            </div>
          </div>

          {/* RIGHT: Angled Image */}
      <div className="hidden md:block flex-1 relative w-full max-w-xl group">
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden shadow-2xl rounded-3xl ring-2 ring-[#2EC7D6]/20 transition-all duration-500 transform rotate-45 translate-x-20">
          
          {/* Background Image inside rotated container */}
          <img
            src="/hero.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover transform -rotate-45 scale-[1.5]"
          />

          {/* Overlay (optional for contrast) */}
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

          {/* Logo with reverse rotation */}
          <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
            <img
              src="/logo.png"
              alt="Parsing Logo"
              className="h-32 w-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>



        </div>
      </section>


      {/*About 1 section*/}
      <section id="about-1" className="relative bg-gray-100 py-16 border-y-4 border-[#2EC7D6]">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-800 space-y-12">

          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            {lang === 'bg' ? 'ТЪРСИТЕ ЛИ' : 'ARE YOU LOOKING FOR'}
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            {lang === 'bg'
              ? 'Искали ли сте някога, хотелската Ви система да бъде свързана с Туроператорите, за да не се налага следенето на резервациите...'
              : "Have you ever wanted your hotel system to be connected to Tour Operators so you don't have to keep track of bookings..."}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-8">
            {/* Left Column */}
            <div className="flex-1 max-w-2xl md:mr-auto space-y-6 md:text-right md:-translate-x-15">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  {lang === 'bg'
                    ? 'И ... да не е нужно да четете e-mail-и, провеждате телефонни разговори, проверявате контингенти, въвеждате резервации ...'
                    : 'And ... not having to read e-mails, make phone calls, check contingents, enter reservations ...'}
                </p>
                <div className="hidden md:block w-full h-[2px] bg-[#2EC7D6] md:-ml-[5%]" />
              </div>

              <p className="leading-relaxed md:-translate-x-15">
                {lang === 'bg'
                  ? '... да не се занимавате с овърбукинг, грешки в резервациите, трудности и несъответствия при фактуриране ...'
                  : '... not to deal with overbooking, booking errors, billing difficulties and discrepancies ...'}
              </p>
            </div>

            {/* Diagonal Line */}
            <div className="hidden md:block w-1 h-52 relative shrink-0 ml-4 translate-x-12">
              <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#2EC7D6] rotate-45 transform origin-top" />
              
            </div>

            {/* Right Column */}
            <div className="flex-1 max-w-xl md:mx-auto space-y-6 md:text-left md:translate-x-15">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  {lang === 'bg'
                    ? '... да използвате времето си в търсене на нови клиенти, по-добро обслужване на съществуващите, качествено управление на хотела, подобряване и оптимизиране на работата ...'
                    : '... to use your time in search of new customers, better service to existing ones, quality management of the hotel, improvement and optimization of work ...'}
                </p>
                <div className="hidden md:block w-full h-[2px] bg-[#2EC7D6] md:-ml-[10%]" />
              </div>

              <p className="leading-relaxed md:-translate-x-15">
                {lang === 'bg'
                  ? 'Може би търсите автоматизиран процес, който да се справи с всичко това вместо вас...'
                  : "Maybe you're looking for an automated process to do all of this for you..."}
              </p>
            </div>
          </div>

        </div>
      </section>
      {/*Image*/}
      <section className="bg-white py-16 border-b-4 border-[#2EC7D6]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-full overflow-x-auto">
            <img
              src="/parsing-view.png"
              alt="Booking channels and system diagram"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="what-we-do" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              {lang === 'bg' ? 'КАКВО ПРАВИМ' : 'WHAT WE DO'}
            </h2>
            <p className="text-[#2EC7D6] font-semibold text-lg">24\7</p>
            <div className="w-24 h-1 bg-[#2EC7D6] mx-auto mt-2" />
          </div>

          {/* Description */}
          <div className="max-w-4xl  mx-auto text-gray-700 text-base leading-relaxed space-y-3 mb-16  text-left">
            {lang === 'bg' ? (
              <>
                <p>Автоматизира и подобрява процеса на обработка на резервации.</p>
                <p>Обработва над 95% от всички резервации, независимо как са получени.</p>
                <p>Времето, необходимо на Вас или Вашия екип за работа с резервации, се намалява с около 90%.</p>
                <p>
                  Дава възможност да следите статуса на резервациите от туроператори и партньори чрез онлайн портал,
                  без нужда от постоянни обаждания или имейли за уточняване на параметри.
                </p>
                <p>
                  Подпомага ежедневната Ви работа чрез управление и обработка на данни, като се ангажира с точността и навременното въвеждане на резервации, промени и анулации.
                </p>
              </>
            ) : (
              <>
                <p>Automates and refines the booking flow process.</p>
                <p>Handles over 95% of all bookings regardless of how they are received.</p>
                <p>The time required for you or your team related to the booking process is reduced by around 90%.</p>
                <p>
                  Creates an opportunity to track the status of reservations for tour operators and partners through an online portal,
                  without the need for constant phone calls or e-mails to specify the parameters of each one.
                </p>
                <p>
                  Facilitates your day-to-day work by supporting the booking process by managing and manipulating data,
                  committed to the accuracy and timely entry of bookings, changes and cancellations.
                </p>
              </>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
            {/* 1. Statistics */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img src="/parsing-stat.png" alt="Statistics" className="w-24 h-24 object-contain" />
              <h3 className="text-xl font-semibold">
                {lang === 'bg' ? 'Статистика' : 'Statistics'}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">
                {lang === 'bg'
                  ? 'Предоставя анализи и статистики, свързани със заетостта на хотела по пазари, туроператори, приходи и др.'
                  : 'It provides analyzes and statistics related to Hotel occupancy by markets, tour operators, revenues, etc.'}
              </p>
            </div>

            {/* 2. Compare Rooming Lists */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img src="/parsing-compare.png" alt="Compare Rooming Lists" className="w-24 h-24 object-contain" />
              <h3 className="text-xl font-semibold">
                {lang === 'bg' ? 'Сравнение на стаи' : 'Compare Rooming Lists'}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">
                {lang === 'bg'
                  ? 'Инструмент за бързо сравнение на резервации от туроператори с тези в хотелската система. Показва разликите и позволява добавяне или отмяна с един клик.'
                  : 'A tool to quickly compare a list of reservations from tour operators with those in the hotel system. It shows the differences as well as a one-click method to add or cancel them.'}
              </p>
            </div>

            {/* 3. Stop Sales & Overbooking */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img src="/parsing-stop.png" alt="Stop sales & Overbooking" className="w-24 h-24 object-contain" />
              <h3 className="text-xl font-semibold">
                {lang === 'bg' ? 'Стоп продажби и овербукинг' : 'Stop Sales & Overbooking'}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">
                {lang === 'bg'
                  ? 'Добавяне и наблюдение на стоп продажби и овербукинг по типове стаи, квоти от туроператори и капацитет на целия хотел.'
                  : 'Add and monitor for Stop sales and Overbooking by room types, allotments by tour operators, as well as the capacity of the entire hotel.'}
              </p>
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

      <section id="hotel-systems" className="bg-[#2EC7D6] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'bg' ? 'ХОТЕЛСКИ СИСТЕМИ' : 'HOTEL SYSTEMS'}
          </h2>
          <p className=" mb-12">
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


      <section>
        <div className="bg-gray-100 py-20 px-4"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-16 mx-8">
              {[list1, list2, list3, list4, list5, list6, list7, list8, list9].map(
                (group, i) => (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform text-left space-y-2"
                  >
                    {group.map((item, index) => (
                      <div
                        key={index}
                        className="text-gray-800 font-medium transition-colors hover:text-[#2EC7D6]"
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

      <section id="about" className="bg-gray-100 pt-0 pb-20 px-4">
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
                className="flex flex-1 min-w-[250px] max-w-[300px] items-center gap-4 text-gray-700 hover:text-[#2EC7D6] transition"
              >
                <div className="w-12 h-12 bg-[#2EC7D6] rounded-full flex items-center justify-center shrink-0">
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
