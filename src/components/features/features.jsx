import React from 'react';

const Features = () => {
  const features = [
    { title: 'Real-Time Data', description: 'Get up-to-date information on your investments.' },
    { title: 'Portfolio Management', description: 'Easily manage your crypto portfolio.' },
    { title: 'Security', description: 'Your data is safe with us.' },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="flex justify-around">
          {features.map((feature, index) => (
            <div key={index} className="max-w-sm">
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
