import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { CheckIcon, CogIcon, LightningIcon, ClockIcon, ChartIcon, CloudIcon } from '../icons';

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
      description: 'Tailor every aspect of your landing page to match your brand identity and requirements.',
    },
    {
      icon: <CogIcon />,
      title: 'Fully Customizable',
      description: 'Configure every element to create a unique experience that perfectly represents your brand.',
    },
    {
      icon: <LightningIcon />,
      title: 'Fully Customizable',
      description: 'Optimize your landing page for maximum performance and conversion rates.',
    },
    {
      icon: <ClockIcon />,
      title: 'Fully Customizable',
      description: 'Save time with our ready-to-use components that can be quickly assembled into a complete page.',
    },
    {
      icon: <ChartIcon />,
      title: 'Fully Customizable',
      description: 'Track your landing page performance with built-in analytics and optimization tools.',
    },
    {
      icon: <CloudIcon />,
      title: 'Fully Customizable',
      description: 'Deploy your landing page to the cloud with just a few clicks and scale as needed.',
    },
  ];

  return (
    <section id="features" className="pb-8 relative">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Boxes</h2>
          <p className="text-white/60 max-w-2xl">
            Our platform offers a comprehensive set of features designed to help you create stunning landing pages that convert visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;