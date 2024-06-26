import React from 'react';

const Section = ({ id, title, content, learnMore }) => {
  return (
    <div className= {`box${id}`}>
      <h1>{title}</h1>
      <p>{content}</p>
      {learnMore && <h4>Learn more</h4>}
    </div>
  );
};

export default Section;
