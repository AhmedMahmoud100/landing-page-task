import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import { InstagramIcon, TwitterIcon, FacebookIcon, LinkedInIcon } from '../icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#' },
        { name: 'Testimonials', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
    {
      name: 'Facebook', icon: <FacebookIcon />, href: '#'
    },
    {
      name: 'Instagram', icon: <InstagramIcon />, href: '#'
    },
    {
      name: 'LinkedIn', icon: <LinkedInIcon />, href: '#'
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text inline-block mb-4">Rapid</Link>
            <p className="text-white/60 mb-6 max-w-md">
              Create stunning landing pages with our modern components. Perfect for showcasing your products and services with style.
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

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
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
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Rapid. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;