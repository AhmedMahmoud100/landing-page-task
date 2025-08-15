import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 16C16 17.1046 14.2091 18 12 18C9.79086 18 8 17.1046 8 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-2xl font-bold text-white">Squid</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white/80 hover:text-white transition-colors">Home</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button href="#" variant="primary" size="sm">Download Template</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;