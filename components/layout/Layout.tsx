'use client';

import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-950">{children}</main>
      <Footer />
    </>
  );
}
