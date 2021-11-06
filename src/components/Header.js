import React, { useState, useLayoutEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import { BiChart } from 'react-icons/bi';
import { GiSoccerKick } from 'react-icons/gi';
import { GiSoccerBall } from 'react-icons/gi';
import Hero from './Hero';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const [width] = useWindowSize();

  let hamburgerMenu;
  if (width < 1200) {
    hamburgerMenu = true;
  } else {
    hamburgerMenu = false;
  }

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const scrollTo = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {hamburgerMenu ? (
        <div className="Nav-mobile">
          <div className="Nav-mobile__hamburger">
            <div className="Nav-mobile__hamburger__icon">
              {sidebar ? (
                <FaIcons.FaTimes
                  className="Nav-mobile__hamburger__icon__svg"
                  onClick={showSidebar}
                />
              ) : (
                <FaIcons.FaBars
                  className="Nav-mobile__hamburger__icon__svg"
                  onClick={showSidebar}
                />
              )}
            </div>
          </div>
          <nav
            className={sidebar ? 'Nav-mobile__nav--active' : 'Nav-mobile__nav'}
          >
            <ul className="Nav-mobile__nav__list" onClick={showSidebar}>
              <li className="Nav-mobile__nav__list__item">
                <span className="Nav-mobile__nav__list__item__close">
                  <FaIcons.FaTimes
                    className="Nav-mobile__nav__list__item__icon"
                    onClick={showSidebar}
                  />
                </span>
              </li>
              <li
                className="Nav-mobile__nav__list__item"
                onClick={() => scrollTo('#Standings')}
              >
                <BiChart className="Nav-mobile__nav__list__item__icon" />
                <span className="Nav-mobile__nav__list__item__name">
                  Standings
                </span>
              </li>
              <li
                className="Nav-mobile__nav__list__item"
                onClick={() => scrollTo('#GoalScorers')}
              >
                <GiSoccerKick className="Nav-mobile__nav__list__item__icon" />
                <span className="Nav-mobile__nav__list__item__name">
                  Top Goal Scorers
                </span>
              </li>
              <li
                className="Nav-mobile__nav__list__item"
                onClick={() => scrollTo('#Fixtures')}
              >
                <BsCalendar className="Nav-mobile__nav__list__item__icon" />
                <span className="Nav-mobile__nav__list__item__name">
                  Matches
                </span>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <nav className="Nav">
          <ul className="Nav__list" onClick={showSidebar}>
            <li className="Nav__list__item">
              <BiChart className="Nav__list__item__icon" />
              <span
                className="Nav__list__item__name"
                onClick={() => scrollTo('#Standings')}
              >
                Standings
              </span>
            </li>
            <li className="Nav__list__item">
              <GiSoccerKick className="Nav__list__item__icon" />
              <span
                className="Nav__list__item__name"
                onClick={() => scrollTo('#GoalScorers')}
              >
                Top Goal Scorers
              </span>
            </li>
            <li className="Nav__list__item">
              <BsCalendar className="Nav__list__item__icon" />
              <span
                className="Nav__list__item__name"
                onClick={() => scrollTo('#Fixtures')}
              >
                Matches
              </span>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__content">
        <span className="Header__content__logo">
          <GiSoccerBall className="" />
        </span>
        <Nav />
      </div>
      <Hero />
    </header>
  );
};

export default Header;
