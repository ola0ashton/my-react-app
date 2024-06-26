import React from 'react';

const testimonials = [
  {
    imgSrc: "./images/image-emily.jpg",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    title: "Marketing Director"
  },
  {
    imgSrc: "./images/image-thomas.jpg",
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    title: "Chief Operating Officer"
  },
  {
    imgSrc: "./images/image-jennie.jpg",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    title: "Business Owner"
  }
];

const Testimonials = () => {
  return (
    <section id="section">
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <img src={testimonial.imgSrc} alt={testimonial.name} />
          <p style={{ color: 'hsl(232, 10%, 55%)' }}>{testimonial.text}</p>
          <div>
            <h5>{testimonial.name}</h5>
            <small style={{ color: 'hsl(210, 4%, 67%)' }}>{testimonial.title}</small>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
