import React from 'react';
import salah from '../assets/images/salah.png';

const Hero = () => {
  const scrollTo = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="Hero">
      <div className="Hero__content">
        <div className="Hero__content__header">
          <h1 className="Hero__content__header__title">
            Soccer stats, standings and more!
          </h1>
          <button
            className="Hero__content__header__cta"
            onClick={() => scrollTo('#Standings')}
          >
            Check it out!
          </button>
        </div>

        <img className="Hero__content__image" src={salah} alt="Salah" />
      </div>
    </div>
  );
};

export default Hero;
