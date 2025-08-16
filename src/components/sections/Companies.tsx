import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';

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
    <section id="companies" className="pt-20 pb-[200px] bg-[#18181C] relative">
      <Container>
        <div className="text-center mb-10 ">
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
          className="flex gap-8 rounded-3xl absolute p-12 md:p-18 bg-cover bg-center z-10 gradient-bg w-[900px] left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
        >
          <div className="relative z-10 flex flex-col items-start">
            <div className="mb-6 text-left">
              <p className="text-sm font-semibold mb-2">Love our Tool?</p>
              <h3 className="text-4xl font-bold mb-6 leading-[50px]">
                Feel Free to Join our
                <br />
                15 Days Free Trial
              </h3>
            </div>
            <Button href="#" size="md" variant='black' className="px-8">
              Download Template
            </Button>
          </div>

          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-20 w-[500px] -mt-5 h-[370px]">
            <Image
              src="/images/word-wide.png"
              alt="World wide"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Companies;
