import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              losingmoney
            </Link>
            <div className="hidden sm:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <Link href="/rules" className="text-gray-600 hover:text-gray-800">
                Rules
              </Link>
            </div>
            <button 
              className="sm:hidden text-gray-600 hover:text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
          {isMenuOpen && (
            <div className="sm:hidden mt-4 space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <Link href="/rules" className="block text-gray-600 hover:text-gray-800">
                Rules
              </Link>
            </div>
          )}
        </nav>
      </header>
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-8"
      >
        {children}
      </motion.main>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          © 2025 losingmoney
        </div>
      </footer>
    </div>
  );
}; 