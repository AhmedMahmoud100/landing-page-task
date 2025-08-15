import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Companies = () => {
  const companies = [
    { name: 'Company 1', logo: 'C1' },
    { name: 'Company 2', logo: 'C2' },
    { name: 'Company 3', logo: 'C3' },
    { name: 'Company 4', logo: 'C4' },
    { name: 'Company 5', logo: 'C5' },
  ];

  return (
    <section id="companies" className="py-20">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Companies we Worked<br />With Since 2015</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="h-12 w-24 bg-white/5 rounded flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
            >
              <span className="font-bold">{company.logo}</span>
            </div>
          ))}
        </div>
        
        {/* Free Trial Banner */}
        <div className="rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 gradient-bg opacity-80" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Feel Free to Join our<br />15 Days Free Trial</h3>
              <p className="text-white/80">Experience all the features with no commitment</p>
            </div>
            <Button href="#trial" variant="secondary" size="lg">Start Free Trial</Button>
          </div>
          
          {/* World Map Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 0C250 0 150 100 0 200V400H800V200C650 100 550 0 400 0Z" fill="white" fillOpacity="0.1"/>
              <circle cx="200" cy="150" r="10" fill="white" fillOpacity="0.3"/>
              <circle cx="300" cy="250" r="8" fill="white" fillOpacity="0.3"/>
              <circle cx="500" cy="180" r="12" fill="white" fillOpacity="0.3"/>
              <circle cx="650" cy="220" r="9" fill="white" fillOpacity="0.3"/>
              <circle cx="400" cy="300" r="11" fill="white" fillOpacity="0.3"/>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Companies;