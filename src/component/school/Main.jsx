import React from 'react';
import Section from './Section.jsx';

const Main = () => {
  return (
    <main>
      <Section
        id="home"
        title="Transform your brand"
        content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        learnMore
      />
      <div className="box2"></div>
      <div className="box3"></div>
      <Section
        id="stand-out"
        title="Stand out to the right audience"
        content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        learnMore
      />
      <div className="box5">
        <h2>Graphic design</h2>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
      </div>
      <div className="box6">
        <h2>Photography</h2>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </main>
  );
};

export default Main;
