import React from 'react';
import Header from './component/Header.jsx';
import Main from '../component/Main.jsx';
import Testimonials from '../component/Testimonials.jsx';
import Pictures from '../component/Pictures.jsx';
import Footer from '../component/Footer.jsx';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Testimonials />
      <Pictures />
      <Footer />
    </div>
  );
}

export default App;