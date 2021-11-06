import React, { useContext } from 'react';
import SoccerContext from '../context/context';
import { SCORERS_DATA } from '../data/scorers';
import { COUNTRIES } from '../data/countryCodes';

const Player = ({ player, index }) => {
  const { numberOfGoals } = player;
  const { name, nationality, position } = player.player;
  let countryCode = COUNTRIES[nationality];

  if (nationality === 'England') {
    countryCode = 'gb-eng';
  }

  return (
    <div className="Player">
      {/* <div className="player-rectangle"></div> */}
      <span className="Player__rank">{`${index + 1}.`}</span>
      <span className="Player__name">{name}</span>
      <span className="Player__team">
        <img
          src={`https://crests.football-data.org/${player.team.id}.svg`}
          alt="Crest logo"
          className="Player__team__logo"
        />
        {player.team.name}
      </span>
      <span className="Player__position">{position}</span>
      <span className="Player__country">
        {countryCode && (
          <img
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
            alt="nation flag"
            className="Player__country__logo"
          />
        )}
        {nationality}
      </span>
      <span className="Player__goals">{numberOfGoals}</span>
    </div>
  );
};

const GoalScorers = () => {
  let { goalScorers } = useContext(SoccerContext);

  if (goalScorers == null || goalScorers.length === 0) {
    goalScorers = SCORERS_DATA.scorers;
  }

  return (
    <section id="GoalScorers" className="GoalScorers">
      <h2 className="GoalScorers__title">Top Goal Scorers</h2>
      {goalScorers.map((player, index) => (
        <Player player={player} key={player.player.id} index={index} />
      ))}
    </section>
  );
};

export default GoalScorers;
