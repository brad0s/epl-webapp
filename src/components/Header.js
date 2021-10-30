import React, { useState, useLayoutEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import { BiChart } from 'react-icons/bi';
import { GiSoccerKick } from 'react-icons/gi';
import { MdSportsSoccer } from 'react-icons/md';
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
  const [width, height] = useWindowSize();

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
        <div className="mobile-menu">
          <div className="hamburger">
            <div>
              {sidebar ? (
                <FaIcons.FaTimes className="icon" onClick={showSidebar} />
              ) : (
                <FaIcons.FaBars className="icon" onClick={showSidebar} />
              )}
            </div>
          </div>
          <nav className={sidebar ? 'Nav-mobile active' : 'Nav-mobile'}>
            <ul onClick={showSidebar}>
              <li>
                <span className="close">
                  <FaIcons.FaTimes className="icon" onClick={showSidebar} />
                </span>
              </li>
              <li onClick={() => scrollTo('#Standings')}>
                <BiChart className="icon" />
                <span>Standings</span>
              </li>
              <li onClick={() => scrollTo('#GoalScorers')}>
                <GiSoccerKick className="icon" />
                <span>Top Goal Scorers</span>
              </li>
              <li onClick={() => scrollTo('#Fixtures')}>
                <BsCalendar className="icon" />
                <span>Matches</span>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <nav className="Nav">
          <ul onClick={showSidebar}>
            <li>
              <BiChart className="icon" />
              <span onClick={() => scrollTo('#Standings')}>Standings</span>
            </li>
            <li>
              <GiSoccerKick className="icon" />
              <span onClick={() => scrollTo('#GoalScorers')}>
                Top Goal Scorers
              </span>
            </li>
            <li>
              <BsCalendar className="icon" />
              <span onClick={() => scrollTo('#Fixtures')}>Matches</span>
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
      <div className="wrapper">
        <div>
          <h1>
            <GiSoccerBall className="" />
          </h1>
        </div>
        <Nav />
      </div>
      <Hero />
    </header>
  );
};

export default Header;
