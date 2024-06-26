import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <img src="../images/logo.svg" alt="logo" />
        <ul>
          <li><a href ='/about'>About</a></li>
          <li><a href='/serivces'>Services</a></li>
          <li><a href ='/projects'>Projects</a></li>
          <li><a href ='/contact'><box>CONTACT</box></a></li>
        </ul> 
      </nav>
      <h1 style={{ color: 'rgb(255, 255, 255)' }}>We are creatives</h1>
      <img src="../images/icon-arrow-down.svg" alt="arrow down" className="arrow" />   
    </header>
  );
}

export default Header;