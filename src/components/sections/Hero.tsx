import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background gradient waves */}
      <div className="absolute bottom-[0] left-0 w-full h-[474px]" >
        <Image
          src="/images/gredient-bg.png"
          alt="gredient wave"
          fill
          className="object-contain bottom-0 left-0"
        />
      </div>

      {/* Blur balls */}
      <div className="absolute top-60 left-50 w-[130px] h-[130px] -z-10">
        <Image
          src="/images/blur-balls.png"
          alt="blur ball"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-30 right-50 w-[130px] h-[130px] -z-10">
        <Image
          src="/images/blur-balls.png"
          alt="blur ball"
          fill
          className="object-contain"
        />
      </div>

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

        <div className="relative px-6 w-full lg:w-[860px]  h-[200px] sm:h-[200px] md:h-[350px] lg:h-[550px] mx-auto mb-[100px]">
          <Image
            src="/images/dashboard-placeholder.png"
            alt="dashboard image placeholder"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
