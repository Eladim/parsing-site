'use client';

import Image from 'next/image';

const logosNew = [
  '/partners2/alltours_logo.png',
  '/partners2/almaservice-logo.png',
  '/partners2/anex-logot.png',
  '/partners2/bontour-logo.png',
  '/partners2/booking-logoe.png',
  '/partners2/cedoklogo.png',
  '/partners2/club-magellan-logo.png',
  '/partners2/dertour_logo_455x120.png',
  '/partners2/dmtravel-logo.png',
  '/partners2/expedia-logot.png',
  '/partners2/itaka-logo.png',
  '/partners2/jet2holidays logo.png',
  '/partners2/LOGO novoton.png',
  '/partners2/logo-big.png',
  '/partners2/logo-orthana.png',
  '/partners2/logo-profi.png',
  '/partners2/mts-logo.png',
  '/partners2/new-sun-logo.png',
  '/partners2/noytravel-logo.png',
  '/partners2/rainboll-logo.png',
  '/partners2/Schauinsland-Reisen_logo.png',
  '/partners2/shs-logo.png',
  '/partners2/solvex-logo.png',
  '/partners2/teddy-kam-logo.png',
  '/partners2/teztour-logo.png',
  '/partners2/tui-logo.png',
  '/partners2/vts-logo.png',
];


export default function TourOperatorCarousel() {
  const repeated = [...logosNew, ...logosNew]; // Seamless scroll

  return (
    <section className="bg-gray-200 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="carousel-track flex items-center gap-10 animate-scroll-slow whitespace-nowrap px-4 min-w-max">
          {repeated.map((logo, i) => (
            <div
              key={i}
              className="grayscale hover:grayscale-0 transition duration-300 flex-shrink-0 relative w-[120px] h-[80px]"
            >
              <Image
                src={logo}
                alt={`Logo ${i}`}
                fill
                sizes="(max-width: 768px) 80px, 120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
