'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { skills } from '@/lib/data';

export function Skills() {
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  const categories = Object.keys(skillsByCategory);

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 bg-transparent">
      <motion.div
        aria-hidden
        animate={{ x: [0, 14, 0], y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-2 sm:top-4 left-2 sm:left-10 h-36 sm:h-40 w-36 sm:w-40 rounded-full bg-stone-300/15 blur-3xl dark:bg-stone-500/15"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-2 sm:bottom-4 right-2 sm:right-6 h-48 sm:h-56 w-48 sm:w-56 rounded-full bg-zinc-300/10 blur-3xl dark:bg-stone-400/10"
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
          <span className="section-badge">Capabilities</span>
          <h2 className="mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100">Skills</h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-stone-200/80">Tools and technologies I use to design and deliver backend products.</p>
        </motion.div>

        {/* Skills Categories */}
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:grid-cols-3 md:gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="w-full"
            >
              <Card className="h-full text-center">
                <h3 className="mb-4 text-lg font-bold text-slate-900 sm:mb-6 sm:text-xl dark:text-slate-100">
                  {category}
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {skillsByCategory[category].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="rounded-lg sm:rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2 text-center dark:border-slate-700/60 dark:bg-slate-800/60 sm:px-4 sm:py-2.5">
                        <span className="block text-sm font-medium text-slate-900 sm:text-base dark:text-slate-100">
                          {skill.name}
                        </span>
                        {skill.proficiency && (
                          <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-300/75">
                            {skill.proficiency}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
