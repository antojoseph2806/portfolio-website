import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const fadeIn = () => {
      const elements = document.querySelectorAll('.fade');
      elements.forEach((el) => {
        el.classList.add('fade-in');
      });
    };
    fadeIn();
  }, []);

  return (
    <section className="home">
      {/* Red background circles */}
      <div className="red-circle main"></div>
      <div className="red-circle small1"></div>
      <div className="red-circle small2"></div>

      <div className="home-content">
        <h1 className="fade">Welcome to My Portfolio</h1>
        <p className="fade">
          I’m <strong>ANTO JOSEPH</strong>, A passionate web developer with expertise in React js, Node js and modern web technologies.
        </p>
      </div>

      <div className="letter-images">
        <img src="/A.png" alt="A" className="letter letter1" />
        <img src="/N.png" alt="N" className="letter letter2" />
        <img src="/T.png" alt="T" className="letter letter3" />
        <img src="/O.png" alt="O" className="letter letter4" />
      </div>
    </section>
  );
};

export default Home;
