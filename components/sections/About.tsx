'use client';

import { motion } from 'framer-motion';
import { portfolio } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 bg-transparent">
      <motion.div
        aria-hidden
        animate={{ x: [0, 16, 0], y: [0, -10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 left-2 sm:left-6 h-44 sm:h-48 w-44 sm:w-48 rounded-full bg-stone-300/20 blur-3xl dark:bg-stone-500/15"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-16 right-2 sm:right-8 h-48 sm:h-52 w-48 sm:w-52 rounded-full bg-zinc-300/15 blur-3xl dark:bg-stone-400/10"
      />

      <div className="site-container relative w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16"
        >
          <span className="section-badge">About</span>
          <h2 className="mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100">About Me</h2>
        </motion.div>

        {/* Bio */}
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:gap-7 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="w-full space-y-4 rounded-2xl border border-stone-200/70 bg-white/85 p-6 sm:space-y-6 sm:rounded-3xl sm:p-8 dark:border-stone-500/30 dark:bg-stone-900/45"
          >
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold text-slate-900 sm:mb-6 sm:text-3xl dark:text-stone-100">
                Backend Developer
              </h3>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-stone-200/85 mb-4 sm:mb-6">
                {portfolio.bio}
              </p>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-stone-200/85">
                I&apos;m passionate about creating efficient, maintainable code and building systems that
                scale. Currently pursuing my BSc in Computer Science while working on real-world
                projects.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-7">
                {portfolio.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-stone-200/80 bg-stone-50/85 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-stone-700 dark:border-stone-600/50 dark:bg-stone-800/45 dark:text-stone-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
