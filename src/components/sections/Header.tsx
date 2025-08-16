import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { SquidLogo } from '../icons';

const Header = () => {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <SquidLogo />
            <span className="text-2xl font-bold text-white">Squid</span>
          </Link>

          <div className="flex gap-6">
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-[#9E9E9E] hover:text-white transition-colors">Home</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button href="#" variant="primary" size="sm">Download Template</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;