'use client';

import Image from 'next/image';

const logos = [
  '/partners/astoria.png',
  '/partners/mirabelle.png',
  '/partners/radina.png',
  '/partners/hvd-main-white-logo.png',
  '/partners/wave-logo.png',
  '/partners/sunrise.png',
  '/partners/albena.png',
];


export default function HotelLogosCarousel() {
  const repeatedLogos = [...logos, ...logos]; // Duplicate for seamless looping

  return (
    <section className="bg-slate-700 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="carousel-track flex items-center gap-10 animate-scroll whitespace-nowrap px-4 min-w-max">

          {repeatedLogos.map((logo, i) => (
            <div
              key={i}
              className="grayscale hover:grayscale-0 transition duration-300 flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Logo ${i}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
