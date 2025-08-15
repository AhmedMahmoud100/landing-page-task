import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient waves */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-pink-500 opacity-30 rounded-[100%_100%_0_0] -z-10" />
      <div className="absolute bottom-0 right-0 w-full h-40 bg-purple-500 opacity-30 rounded-[100%_0_0_0] -z-10" />
      
      {/* Blur balls */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-pink-500 opacity-20 blur-3xl -z-10" />
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-purple-500 opacity-20 blur-3xl -z-10" />
      
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Beautiful Landing Page<br />
            <span className="text-white">Design for You</span>
          </h1>
          <p className="text-lg text-[#9E9E9E] mb-8 max-w-2xl mx-auto">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#" variant="primary">Download Template</Button>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-[#111] rounded-xl p-4 shadow-2xl">
            <div className="grid grid-cols-3 gap-4 p-4">
              {/* Left Panel */}
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">Squid</span>
                </div>
                
                <div className="space-y-4 mt-6">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-sm bg-white/10" />
                      <div className="h-2 bg-white/20 rounded-full w-full" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-8">
                  <div className="w-8 h-8 rounded-full bg-pink-500/30 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-xs text-white">P</div>
                  </div>
                </div>
              </div>
              
              {/* Middle Panel - Circle Chart */}
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2 bg-white/20 rounded-full w-1/2" />
                  <div className="h-2 bg-white/10 rounded-full w-1/4" />
                </div>
                
                <div className="h-48 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-8 border-purple-500/30" />
                    <div className="absolute inset-0 rounded-full border-8 border-pink-500 border-r-transparent border-b-transparent border-l-transparent" />
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="h-1 bg-white/10 rounded-full" />
                  ))}
                </div>
              </div>
              
              {/* Right Panel - People */}
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-2 bg-white/20 rounded-full w-1/3" />
                  <div className="h-2 bg-white/10 rounded-full w-1/5" />
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded-full w-2/3 mb-1" />
                        <div className="h-2 bg-white/10 rounded-full w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Panel - Chart */}
              <div className="col-span-2 bg-[#1a1a1a] rounded-lg p-4 relative overflow-hidden">
                {/* Curvy gradient background */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 -z-0" style={{ background: 'linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)', borderRadius: '50% 50% 0 0' }} />
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2 bg-white/20 rounded-full w-1/4" />
                  <div className="flex space-x-2">
                    <div className="h-2 bg-white/10 rounded-full w-6" />
                    <div className="h-2 bg-white/10 rounded-full w-6" />
                    <div className="h-2 bg-white/10 rounded-full w-6" />
                  </div>
                </div>
                
                <div className="flex items-end h-20 gap-2 mt-4">
                  {[30, 45, 25, 60, 75, 65, 80].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-sm" 
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Right Panel */}
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2 bg-white/20 rounded-full w-1/3" />
                  <div className="h-2 bg-white/10 rounded-full w-1/5" />
                </div>
                
                <div className="grid grid-rows-3 gap-3 mt-4">
                  <div className="h-2 bg-white/10 rounded-full w-full" />
                  <div className="h-2 bg-white/20 rounded-full w-full" />
                  <div className="h-2 bg-white/10 rounded-full w-2/3" />
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