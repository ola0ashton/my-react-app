import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h3>Client testimonials</h3>
      <Testimonials />
      <section className="beforefooter">
        <img src="./images/desktop/image-gallery-milkbottles.jpg" alt="Gallery Milk Bottles" />
        <img src="./images/desktop/image-gallery-orange.jpg" alt="Gallery Orange" />
        <img src="./images/desktop/image-gallery-cone.jpg" alt="Gallery Cone" />
        <img src="./images/desktop/image-gallery-sugarcubes.jpg" alt="Gallery Sugar Cubes" />
      </section>
      <Footer />
    </div>
  );
}

export default App;
