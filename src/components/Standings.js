import React, { useContext } from 'react';
import { SoccerContext } from '../context/context';
import { STANDINGS_DATA } from '../data/standings';

const Standings = () => {
  let { standings } = useContext(SoccerContext);

  if (standings == null || standings.length === 0) {
    standings = STANDINGS_DATA.standings[0].table;
  }

  return (
    <section id="Standings" className="Standings">
      <h2 className="Standings__title">Standings</h2>
      <div className="Standings__table">
        <div className="Standings__table__headers">
          <span></span>
          <span className="Standings__table__headers__items team">Team</span>
          <span className="Standings__table__headers__items won">Won</span>
          <span className="Standings__table__headers__items lost">Lost</span>
          <span className="Standings__table__headers__items draw">Draw</span>
          <span className="Standings__table__headers__items gf">Goals For</span>
          <span className="Standings__table__headers__items ga">
            Goals Against
          </span>
          <span className="Standings__table__headers__items gd">
            Goals Difference
          </span>
          <span className="Standings__table__headers__items gp">
            Games Played
          </span>
          <span className="Standings__table__headers__items points">
            Points
          </span>
        </div>

        {standings.map((item) => (
          <div className="Standings__table__items" key={item.position}>
            <span className="Standings__table__items__item">
              <img
                className="Standings__table__items__item__image crest"
                src={item.team.crestUrl}
                alt={`${item.team.name} team logo`}
              />
            </span>
            <span className="Standings__table__items__item team">
              {item.team.name}
            </span>
            <span className="Standings__table__items__item won">
              {item.won}
            </span>
            <span className="Standings__table__items__item lost">
              {item.lost}
            </span>
            <span className="Standings__table__items__item draw">
              {item.draw}
            </span>
            <span className="Standings__table__items__item gf">
              {item.goalsFor}
            </span>
            <span className="Standings__table__items__item ga">
              {item.goalsAgainst}
            </span>
            <span className="Standings__table__items__item gd">
              {item.goalDifference}
            </span>
            <span className="Standings__table__items__item gp">
              {item.playedGames}
            </span>
            <span className="Standings__table__items__item points">
              {item.points}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Standings;
