import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Companies = () => {
  const companies = [
    { name: 'Smile' },
    { name: 'Urban' },
    { name: 'natural' },
    { name: 'WAVE' },
    { name: 'HAPPY' },
    { name: 'Alisa' },
  ];

  return (
    <section id="companies" className="py-20 bg-[#18181C]">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Companies we Worked<br />With in Since 2015</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="h-16 px-6 bg-black border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <span className="font-semibold text-lg italic">{company.name}</span>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl overflow-hidden relative p-8 md:p-12"
          style={{ backgroundImage: "url('/images/gredient-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <p className="text-sm font-semibold mb-2">Love our Tool?</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Feel Free to Join our<br />15 Days Free Trial</h3>
            </div>
            <Button href="#" variant="secondary" size="lg">Download Template</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Companies;
