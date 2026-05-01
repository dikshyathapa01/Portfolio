'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { siteConfig } from '@/config/siteConfig';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-stone-200/70 bg-gradient-to-r from-white/84 to-stone-50/80 shadow-[0_10px_30px_rgba(25,20,17,0.08)] backdrop-blur-xl dark:border-stone-600/45 dark:from-slate-950/84 dark:to-stone-950/72"
    >
      <div className="site-container">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 flex-col leading-none text-center">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-stone-700 to-zinc-500 bg-clip-text text-transparent">
              DT
            </span>
            <span className="mt-0.5 text-[6px] sm:text-[8px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-300/80">
              Este
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 text-center md:flex lg:gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-transparent px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-700 transition-all hover:border-stone-200/70 hover:bg-white/70 hover:text-stone-700 dark:text-slate-100 dark:hover:border-stone-500/40 dark:hover:bg-stone-900/40 dark:hover:text-stone-300 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Theme and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg border border-stone-200/70 bg-white/80 p-2 shadow-[0_8px_20px_rgba(25,20,17,0.08)] transition-all hover:bg-stone-100 dark:border-stone-600/45 dark:bg-stone-900/60 dark:hover:bg-stone-800 sm:rounded-xl"
              aria-label="Toggle theme"
            >
              {mounted ? (
                resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />
              ) : (
                <span className="block h-[18px] w-[18px]" aria-hidden />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="rounded-lg border border-stone-200/70 bg-white/80 p-2 shadow-[0_8px_20px_rgba(25,20,17,0.08)] transition-all hover:bg-stone-100 dark:border-stone-600/45 dark:bg-stone-900/60 dark:hover:bg-stone-800 md:hidden sm:rounded-xl"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-stone-200/70 pb-3 pt-1 text-center dark:border-stone-600/45 sm:pb-4 md:hidden"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mx-auto my-1 block w-fit rounded-full px-4 py-1.5 text-sm text-slate-700 transition-all hover:bg-white/70 hover:text-stone-700 dark:text-slate-100 dark:hover:bg-stone-900/45 dark:hover:text-stone-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
