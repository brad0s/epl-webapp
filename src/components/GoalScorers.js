import React from 'react';
import { COUNTRIES } from '../data/countryCodes';

const Player = ({ player, index }) => {
  console.log(player);
  const { numberOfGoals } = player;
  const { name, nationality, position, dateOfBirth } = player.player;
  let countryCode = COUNTRIES[nationality];

  if (nationality === 'England') {
    countryCode = 'gb-eng';
  }

  return (
    <div className="GoalScorers--player">
      <span>{`${index + 1}.`}</span>
      <span>{name}</span>
      <span>{player.team.name}</span>
      <span>{position}</span>
      <span>
        {countryCode && <img src={`https://flagcdn.com/${countryCode}.svg`} />}
      </span>
      <span>{numberOfGoals}</span>
    </div>
  );
};

const GoalScorers = ({ data }) => {
  const { scorers } = data;
  console.log(scorers);

  return (
    <section id="GoalScorers" className="GoalScorers">
      <h2>Top Goal Scorers</h2>
      {scorers.map((player, index) => (
        <Player player={player} key={player.player.id} index={index} />
      ))}
    </section>
  );
};

export default GoalScorers;
