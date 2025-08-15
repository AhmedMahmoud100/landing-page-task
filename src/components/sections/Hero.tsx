import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -left-40 top-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Beautiful Landing Page<br />
            <span className="gradient-text">Design for You</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Create stunning landing pages with our modern components. Perfect for showcasing your products and services with style.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#trial" variant="primary" size="lg">Get Started</Button>
            <Button href="#contact" variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-[#111] rounded-xl p-4 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
              {/* Dashboard Items */}
              <div className="col-span-2 row-span-2 bg-[#1a1a1a] rounded-lg p-4">
                <div className="mb-3 flex justify-between items-center">
                  <h3 className="text-white font-medium">Analytics Overview</h3>
                  <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-purple-500" />
                  </div>
                </div>
                <div className="h-48 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-[#222] relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-r-transparent rotate-45" />
                    <div className="text-2xl font-bold">75%</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col">
                <div className="mb-2 text-sm text-white/70">Users</div>
                <div className="text-xl font-bold mb-2">2,845</div>
                <div className="mt-auto text-green-500 text-sm">+12.5%</div>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col">
                <div className="mb-2 text-sm text-white/70">Revenue</div>
                <div className="text-xl font-bold mb-2">$12,845</div>
                <div className="mt-auto text-green-500 text-sm">+8.2%</div>
              </div>
              
              <div className="col-span-2 bg-[#1a1a1a] rounded-lg p-4">
                <div className="mb-3 text-sm text-white/70">Monthly Growth</div>
                <div className="flex items-end h-24 gap-2">
                  {[30, 45, 25, 60, 75, 65, 80].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-sm" 
                        style={{ height: `${height}%` }}
                      />
                      <div className="text-xs mt-1 text-white/50">{i + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="col-span-2 bg-[#1a1a1a] rounded-lg p-4">
                <div className="mb-3 text-sm text-white/70">Team Members</div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-[#333] border-2 border-[#1a1a1a] flex items-center justify-center text-xs">+3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;