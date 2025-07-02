import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedStackCard({
  children,
  index,
  totalCards,
}: {
  children: React.ReactNode;
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: ref });

  // Map scroll position to decreasing marginTop (e.g. from 120px → 40px)
  const topMargin = useTransform(scrollYProgress, [0, 1], [120 * index, 40 * index]);

  return (
    <motion.div
      style={{
        marginTop: index === 0 ? 0 : topMargin,
        zIndex: totalCards - index,
        height: '400px',
      }}
      className="min-h-[350px] bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl mx-auto relative origin-top"
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
