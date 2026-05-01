'use client';

import { Github, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50/80 dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-700/70 mt-12 sm:mt-16 md:mt-20">
      <div className="site-container py-8 sm:py-12">
        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-stone-700 to-zinc-500 bg-clip-text text-transparent mb-2">
              Dikshya Thapa
            </h3>
            <p className="text-slate-700 dark:text-slate-200/85 text-xs sm:text-sm">
              Backend Developer • Creating scalable applications
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200/85">
              {siteConfig.navigation.filter((item) => item.label !== 'Experience').map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200/85">
              <li className="flex items-center justify-center gap-2">
                <Mail size={14} className="flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-stone-700 dark:hover:text-stone-300">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <MapPin size={14} className="flex-shrink-0" />
                <span>Banepa, Kavre, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200/80 dark:border-slate-700/70 pt-6 sm:pt-8">
          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300/75">
            <p suppressHydrationWarning>&copy; {currentYear} Dikshya Thapa. All rights reserved.</p>

            <div className="flex gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
