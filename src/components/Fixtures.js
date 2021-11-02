import React, { useState, useContext } from 'react';
import moment from 'moment';
import SoccerContext from '../context/context';

const Fixture = ({ match, viewport }) => {
  const duration = match.score.duration;
  const { status, utcDate } = match;
  // const { winner } = match.score;

  let date;
  let time;
  if (viewport < 1200) {
    date = moment(utcDate).format('M/DD');
    time = moment(utcDate).format('h:mma');
  } else {
    date = moment(utcDate).format('dddd MMM Do');
    time = moment(utcDate).format('h:mma');
  }

  let score;
  if (duration === 'REGULAR') {
    score = match.score.fullTime;
  } else {
    score = match.score.extraTime;
  }

  let matchStatus;
  if (status === 'SCHEDULED') {
    matchStatus = 'scheduled';
    // todo
  } else if (status === 'LIVE' || status === 'IN_PLAY') {
    // todo
    matchStatus = 'live';
  } else if (status === 'FINISHED') {
    // todo
    matchStatus = 'final';
  }

  return (
    <div className="Fixtures--match" key={match.id}>
      <div className="dates">
        <div className="time">{time}</div>
        <div className="date">{date}</div>
      </div>
      <div className="awayTeam team">
        <img
          src={`https://crests.football-data.org/${match.awayTeam.id}.svg`}
          alt="Crest Logo"
        />
        <div>{match.awayTeam.name}</div>
      </div>
      <div className={`scores ${matchStatus}`}>
        <div className="score">
          {score.awayTeam === null ? `-` : score.awayTeam}
        </div>
        <span>:</span>
        <div className="score">
          {score.homeTeam === null ? `-` : score.homeTeam}
        </div>
      </div>
      <div className="homeTeam team">
        <img
          src={`https://crests.football-data.org/${match.homeTeam.id}.svg`}
          alt="Crest Logo"
        />
        <div>{match.homeTeam.name}</div>
      </div>
    </div>
  );
};

const Fixtures = () => {
  const { matchDay, matches } = useContext(SoccerContext);
  const [viewportSize] = useState(window.innerWidth);

  return (
    <section id="Fixtures" className="Fixtures">
      <h2>Fixtures</h2>
      {matchDay && <h4>{`Matchweek ${matchDay}`}</h4>}
      <div className="grid-container">
        {matches &&
          matches.map((match) => (
            <Fixture match={match} key={match.id} viewport={viewportSize} />
          ))}
      </div>
    </section>
  );
};

export default Fixtures;
