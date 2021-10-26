import React from 'react';

const GoalScorers = ({ data }) => {
  const { scorers } = data;
  console.log(scorers);
  return (
    <section id="goal-scorers">
      <h2>Top Goal Scorers</h2>
      {scorers.map((player, index) => (
        <div className="scorer">
          <span>{`${index + 1}.`}</span>
          <span>{player.player.name}</span>
          <span>{player.team.name}</span>
          <span>{player.numberOfGoals}</span>
        </div>
      ))}
    </section>
  );
};

export default GoalScorers;
