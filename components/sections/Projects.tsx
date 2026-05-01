'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-transparent py-20 sm:py-24 md:py-28 lg:py-32">
      <motion.div
        aria-hidden
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-16 left-2 sm:left-8 h-40 sm:h-44 w-40 sm:w-44 rounded-full bg-stone-300/20 blur-3xl dark:bg-stone-500/20"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-2 sm:bottom-6 right-2 sm:right-10 h-48 sm:h-52 w-48 sm:w-52 rounded-full bg-zinc-300/15 blur-3xl dark:bg-stone-400/10"
      />

      <div className="site-container relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16"
        >
          <span className="section-badge">Case Studies</span>
          <h2 className="mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-stone-200/80">
            Selected backend work focused on clean architecture, secure APIs, and reliable database operations.
          </p>
        </motion.div>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:gap-7 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="w-full"
            >
              <Card className="border-stone-200/80 bg-white/85 p-6 text-center sm:p-7 md:p-8 dark:border-stone-600/45 dark:bg-stone-900/50" hover={false}>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-stone-300/75">
                  Project {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-stone-100 sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-stone-600 dark:text-stone-300/85">
                  {project.shortDescription}
                </p>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-stone-200/85">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-stone-200/80 bg-stone-50/90 px-3 py-1 text-xs font-semibold text-stone-700 dark:border-stone-600/45 dark:bg-stone-800/55 dark:text-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-stone-300/90 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 transition-all hover:bg-stone-100 dark:border-stone-500/50 dark:bg-stone-900/45 dark:text-stone-200 dark:hover:bg-stone-800/65"
                    >
                      View Repository
                    </a>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
