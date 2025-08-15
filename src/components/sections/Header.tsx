import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">Rapid</Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white/80 hover:text-white transition-colors">Features</Link>
            <Link href="#companies" className="text-white/80 hover:text-white transition-colors">Companies</Link>
            <Link href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button href="#trial" variant="primary" size="sm">Get Started</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;