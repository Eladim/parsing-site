'use client';

import Image from 'next/image';

const logos = [
  '/partners/Hotel-Krystal-logo-Copy.png',
  '/partners/calypso.png',
  '/partners/royal-park.png',
  '/partners/parklands.svg',
  '/partners/odessos.png',
  '/partners/nevis-resort.png',
  '/partners/madara.png',
  '/partners/grifid-logo.png',
  '/partners/logo-aqua-nevis.png',
  '/partners/alba.svg',
  '/partners/gloria.png',
  '/partners/astoria.png',
  '/partners/mirabelle.png',
  '/partners/radina.png',
  '/partners/hvd-main-white-logo.png',
  '/partners/wave-logo.png',
  '/partners/sunrise.png',
  '/partners/albena.svg',
];


export default function HotelLogosCarousel() {
  const repeatedLogos = [...logos, ...logos]; // Duplicate for seamless looping

  return (
<section className="bg-gray-200 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="carousel-track flex items-center gap-10 animate-scroll whitespace-nowrap px-0 min-w-max">

          {repeatedLogos.map((logo, i) => (
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
