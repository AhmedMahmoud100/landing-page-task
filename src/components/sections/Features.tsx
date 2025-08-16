import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { CheckIcon, CogIcon, LightningIcon, ClockIcon, ChartIcon, CloudIcon } from '../icons';
import Button from '../ui/Button';
import Image from 'next/image';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="flex flex-col items-center text-center h-full">
      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </Card>
  );
};

const Features = () => {
  const features = [
    {
      icon: <CheckIcon />,
      title: 'Fully Customizable',
      description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.',
    },
    {
      icon: <CogIcon />,
      title: 'Fully Customizable',
      description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.',
    },
    {
      icon: <LightningIcon />,
      title: 'Fully Customizable',
      description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.',
    },
    {
      icon: <ClockIcon />,
      title: 'Fully Customizable',
      description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.',
    },
    {
      icon: <ChartIcon />,
      title: 'Fully Customizable',
      description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.',
    },
    {
      icon: <CloudIcon />,
      title: 'Fully Customizable',
      description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.',
    },
  ];

  return (
    <section id="features" className="pb-8 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Boxes</h2>
          <p className="text-white/60 max-w-[400px]">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/guide.png"
              alt="Guide"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We're here to guide and help you at all times</h2>
            <p className="text-white/60 mb-8 max-w-md">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
            </p>
            <Button href="#" variant="primary">Download</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
