import React from 'react';
import Nav from './Nan.jsx';

const Header = () => {
  return (
    <header>
      <Nav />
      <h1 style={{ color: 'white' }}><b>We are creatives</b></h1>
      <img src="./images/icon-arrow-down.svg" alt="arrow-down" className="arrow" height="80px" />
    </header>
  );
};

export default Header;
