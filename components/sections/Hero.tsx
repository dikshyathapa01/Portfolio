'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLink';
import { portfolio } from '@/lib/data';

export function Hero() {
  const [profileSrc, setProfileSrc] = useState('/dt.png');
  const [rabbitTapped, setRabbitTapped] = useState(false);
  const firstName = portfolio.name.split(' ')[0];
  const rabbitControls = useAnimationControls();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  useEffect(() => {
    rabbitControls.start({
      x: ['8vw', '78vw', '55vw', '22vw', '70vw', '12vw', '8vw'],
      y: ['9vh', '17vh', '30vh', '15vh', '34vh', '24vh', '9vh'],
      transition: { duration: 28, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [rabbitControls]);

  const handleRabbitTap = () => {
    rabbitControls.stop();
    setRabbitTapped(true);
    setTimeout(() => {
      setRabbitTapped(false);
      rabbitControls.start({
        x: ['8vw', '78vw', '55vw', '22vw', '70vw', '12vw', '8vw'],
        y: ['9vh', '17vh', '30vh', '15vh', '34vh', '24vh', '9vh'],
        transition: { duration: 28, repeat: Infinity, ease: 'easeInOut' },
      });
    }, 900);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-stone-300/25 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            x: [0, 24, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-zinc-300/20 blur-3xl"
        />

        {/* Small rabbit that trails the cursor */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-0 hidden sm:block cursor-pointer"
          animate={rabbitControls}
          onTap={handleRabbitTap}
          whileTap={{ scale: 1.06 }}
        >
          <motion.svg
            width="66"
            height="38"
            viewBox="0 0 66 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
            animate={rabbitTapped ? { y: [0, -4, 0], rotate: [0, -4, 0, 4, 0] } : { y: [0, -2, 0], rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M5 21C7 18 11 17 16 18" stroke="#cdb8a6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M1 24C4 21 9 21 13 22" stroke="#cdb8a6" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
            <ellipse cx="35" cy="22" rx="15" ry="10" fill="#e7d8cb" />
            <ellipse cx="49" cy="18" rx="7" ry="6" fill="#e7d8cb" />
            <ellipse cx="47" cy="7" rx="2.6" ry="6.4" fill="#eddfd2" transform="rotate(-8 47 7)" />
            <ellipse cx="52" cy="8" rx="2.6" ry="6.8" fill="#eddfd2" transform="rotate(7 52 8)" />
            <circle cx="51.5" cy="17.8" r="1" fill="#3f342d" />
            <ellipse cx="24" cy="31" rx="4.5" ry="2" fill="#d9c7b8" />
            <ellipse cx="38" cy="31" rx="4.5" ry="2" fill="#d9c7b8" />
            <ellipse cx="54" cy="24" rx="3" ry="2" fill="#d9c7b8" />
            <circle cx="20" cy="17" r="3" fill="#e1cebf" />
          </motion.svg>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="site-container relative z-10 w-full"
      >
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center justify-items-center gap-8 sm:gap-10">
          <motion.div variants={itemVariants} className="mx-auto w-full max-w-xl text-center">
            <h1 className="text-4xl font-extrabold leading-[1.03] text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl dark:text-stone-100">
              Hi, I&apos;m
              <span className="bg-gradient-to-r from-stone-800 via-stone-600 to-zinc-500 bg-clip-text text-transparent"> {firstName}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl dark:text-stone-200/85">
              {portfolio.shortBio}
            </p>

            <motion.div variants={itemVariants} className="mt-6 sm:mt-9 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a href="#projects" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">View Projects</Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Book A Call</Button>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 sm:mt-8 flex justify-center">
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="relative rounded-2xl border border-stone-200/75 bg-gradient-to-br from-white/96 to-stone-50/65 p-4 shadow-[0_24px_64px_rgba(25,20,17,0.14)] ring-1 ring-white/65 backdrop-blur-md dark:border-stone-600/45 dark:bg-gradient-to-br dark:from-stone-900/82 dark:to-stone-800/55 dark:ring-stone-200/8 sm:rounded-[2rem] sm:p-5 md:p-7">
              <div className="absolute -top-3 -right-3 rounded-xl bg-gradient-to-r from-stone-700 to-stone-600 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(87,83,78,0.36)] sm:-top-4 sm:-right-4 sm:rounded-2xl sm:px-4 sm:py-2">
                Available
              </div>

              <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/60 bg-gradient-to-b from-slate-100/80 to-zinc-100/80 dark:from-slate-800/60 dark:to-zinc-800/50">
                <Image
                  src={profileSrc}
                  alt="Dikshya Thapa"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 36vw"
                  className="object-cover object-top"
                  priority
                  unoptimized
                  onError={() => setProfileSrc('https://avatars.githubusercontent.com/u/220727066?v=4')}
                />
              </div>

              <div className="mt-3 rounded-lg border border-stone-200/70 bg-gradient-to-r from-stone-50/90 to-white/95 px-4 py-3 text-center shadow-[0_10px_28px_rgba(25,20,17,0.08)] dark:border-stone-600/45 dark:from-stone-900/65 dark:to-stone-800/55 sm:mt-5 sm:rounded-2xl sm:px-5 sm:py-4">
                <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-300/80 uppercase tracking-wider">Current Focus</p>
                <p className="mt-1 text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">{portfolio.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center gap-2 mt-12"
        >
          <ArrowDown className="text-slate-400 dark:text-stone-300/60" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
