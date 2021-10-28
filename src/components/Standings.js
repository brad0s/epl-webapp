import React, { useState } from 'react';
import Popup from './Popup';

const Standings = ({ data }) => {
  const table = data.standings[0].table;
  console.log(table);

  const [modal, setModal] = useState(false);

  const togglePopUp = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <section id="Standings" className="Standings">
      <h2>Standings</h2>
      <div className="Standings--table__mobile">
        <div className="Standings--table__mobile--headers">
          <span></span>
          <span className="team">Team</span>
          <span className="won">Won</span>
          <span className="lost">Lost</span>
          <span className="draw">Draw</span>

          <span className="points">Points</span>
        </div>
        {table.map((item) => (
          <div className="Standings--table__mobile--items" key={item.position}>
            <span>
              <img
                className="crest"
                src={item.team.crestUrl}
                alt="Crest Logo"
              />
            </span>
            <span className="team" onClick={togglePopUp}>
              {item.team.name}
            </span>
            <span className="won">{item.won}</span>
            <span className="lost">{item.lost}</span>
            <span className="draw">{item.draw}</span>
            <span className="points">{item.points}</span>
          </div>
        ))}
      </div>

      <div className="Standings--table">
        <div className="Standings--table--headers">
          <span></span>
          <span className="team">Team</span>
          <span className="won">Won</span>
          <span className="lost">Lost</span>
          <span className="draw">Draw</span>
          <span className="">Goals For</span>
          <span className="">Goals Against</span>
          <span className="">Goals Difference</span>
          <span className="">Games Played</span>
          <span className="points">Points</span>
        </div>
        {table.map((item) => (
          <div className="Standings--table--items" key={item.position}>
            <span>
              <img
                className="crest"
                src={item.team.crestUrl}
                alt="Crest Logo"
              />
            </span>
            <span className="team" onClick={togglePopUp}>
              {item.team.name}
            </span>
            <span className="won">{item.won}</span>
            <span className="lost">{item.lost}</span>
            <span className="draw">{item.draw}</span>
            <span className="">{item.goalsFor}</span>
            <span className="">{item.goalsAgainst}</span>
            <span className="">{item.goalDifference}</span>
            <span className="">{item.playedGames}</span>
            <span className="points">{item.points}</span>
          </div>
        ))}
      </div>
      <Popup show={modal} close={togglePopUp} />
    </section>
  );
};

export default Standings;
