import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import { TwitterIcon, LinkedInIcon, InstagramIcon } from '../icons';
import SquidLogo from '../icons/SquidLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sectionLinks = [
    { name: 'Home', href: '#' },
    { name: 'Section One', href: '#' },
    { name: 'Section Two', href: '#' },
    { name: 'Section Three', href: '#' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
    { name: 'Instagram', icon: <InstagramIcon />, href: '#' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <SquidLogo />
              <p className="text-white/60 mt-4 max-w-xs">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Sections</h3>
                <ul className="space-y-3">
                  {sectionLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[#0a0a0a]">.</h3>
                <ul className="space-y-3">
                  {sectionLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[#0a0a0a]">.</h3>
                <ul className="space-y-3">
                  {sectionLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            All Rights Reserved Inkyy.com {currentYear}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
