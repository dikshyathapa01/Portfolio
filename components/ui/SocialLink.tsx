'use client';

import { Mail, Github, Linkedin, Phone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { contactInfo } from '@/lib/data';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  tooltip?: string;
}

export function SocialLink({ href, icon, label, tooltip }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      title={tooltip || label}
      className="inline-flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-all duration-300 hover:bg-stone-700 hover:text-white dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-600"
    >
      {icon}
    </motion.a>
  );
}

export function SocialLinks() {
  const links = [
    { href: `mailto:${contactInfo.email}`, icon: <Mail size={18} />, label: 'Email' },
    { href: contactInfo.github, icon: <Github size={18} />, label: 'GitHub' },
    { href: contactInfo.linkedin || '#', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: contactInfo.cv || '#', icon: <FileText size={18} />, label: 'CV' },
    { href: `tel:${contactInfo.phone}`, icon: <Phone size={18} />, label: 'Phone' },
  ];

  return (
    <div className="flex gap-2.5 sm:gap-4">
      {links.map((link) => (
        <SocialLink key={link.label} href={link.href} icon={link.icon} label={link.label} />
      ))}
    </div>
  );
}
