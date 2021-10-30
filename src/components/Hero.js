import React from 'react';
import salah from '../assets/images/salah.png';

const Hero = () => {
  const scrollTo = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="Hero">
      <div className="wrapper">
        <div>
          <div>Soccer stats, standings and more!</div>
          <a className="cta" onClick={() => scrollTo('#Standings')}>
            Check it out!
          </a>
        </div>

        <img src={salah} alt="Salah" />
      </div>
    </div>
  );
};

export default Hero;
