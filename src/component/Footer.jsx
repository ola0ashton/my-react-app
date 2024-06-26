import React from 'react';

const Footer = () => {
  return (
    <footer>
      <img src="./logo copy.svg" alt="logo" />
      <ul>
        <li><a href='/about'>About</a></li>
        <li><a href='/serivces'>Services</a></li>
        <li><a href='/project'>Project</a></li>
      </ul>
      <div>
        <img src="../images/icon-facebook.svg" alt="Facebook" />
        <img src="../images/icon-instagram.svg" alt="Instagram" />
        <img src="../images/icon-twitter.svg" alt="Twitter" />
        <img src="../images/icon-pinterest.svg" alt="Pinterest" />
      </div>
    </footer>
  );
}

export default Footer;