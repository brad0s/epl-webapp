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
    <div className="GoalScorers--player">
      {/* <div className="player-rectangle"></div> */}
      <span>{`${index + 1}.`}</span>
      <span>{name}</span>
      <span className="team">
        <img
          src={`https://crests.football-data.org/${player.team.id}.svg`}
          alt="Crest logo"
        />
        {player.team.name}
      </span>
      <span className="position">{position}</span>
      <span className="country">
        {countryCode && (
          <img
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
            alt="nation flag"
          />
        )}
        {nationality}
      </span>
      <span className="goals">{numberOfGoals}</span>
    </div>
  );
};

const GoalScorers = () => {
  let { goalScorers } = useContext(SoccerContext);
  console.log(goalScorers);

  if (goalScorers == null || goalScorers.length === 0) {
    goalScorers = SCORERS_DATA.scorers;
  }

  return (
    <section id="GoalScorers" className="GoalScorers">
      <h2>Top Goal Scorers</h2>
      {goalScorers.map((player, index) => (
        <Player player={player} key={player.player.id} index={index} />
      ))}
    </section>
  );
};

export default GoalScorers;
