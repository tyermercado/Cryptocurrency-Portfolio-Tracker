import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'This app is amazing! It has helped me keep track of my investments effortlessly.' },
    { name: 'Jane Smith', feedback: 'A must-have tool for any crypto investor.' },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <div className="flex justify-around">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-sm">
              <p className="italic mb-2">"{testimonial.feedback}"</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
