import React, { useState, useContext } from 'react';
import moment from 'moment';
import SoccerContext from '../context/context';
import { FIXTURES_DATA } from '../data/fixtures';

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
    <div className='Fixture' key={match.id}>
      <div className='Fixture__dates'>
        <div className='Fixture__dates__time'>{time}</div>
        <div className='Fixture__dates__date'>{date}</div>
      </div>
      <div className='Fixture__team Fixture--awayTeam'>
        <img
          src={`https://crests.football-data.org/${match.awayTeam.id}.svg`}
          alt={`${match.awayTeam.name} team logo`}
          className='Fixture__team__logo Fixture--awayTeam__logo'
        />
        <div>{match.awayTeam.name}</div>
      </div>
      <div className={`Fixture__scores Fixture__scores--${matchStatus}`}>
        <div className='Fixtures__scores__score'>
          {score.awayTeam === null ? `-` : score.awayTeam}
        </div>
        <span className='Fixture__scores__separator'>:</span>
        <div className='Fixture__scores__score'>
          {score.homeTeam === null ? `-` : score.homeTeam}
        </div>
      </div>
      <div className='Fixture__team Fixture--homeTeam'>
        <img
          src={`https://crests.football-data.org/${match.homeTeam.id}.svg`}
          alt={`${match.homeTeam.name} team logo`}
          className='Fixture__team__logo'
        />
        <div>{match.homeTeam.name}</div>
      </div>
    </div>
  );
};

const Fixtures = () => {
  let { matchDay, matches } = useContext(SoccerContext);
  const [viewportSize] = useState(window.innerWidth);

  if (matches == null || matches.length === 0) {
    matches = FIXTURES_DATA;
  }

  return (
    <section id='Fixtures' className='Fixtures'>
      <h2 className='Fixtures__title'>Fixtures</h2>
      {matchDay && <p className='Fixtures__subtitle'>{`Matchweek ${matchDay}`}</p>}
      <div className='Fixtures__grid'>
        {matches &&
          matches.map((match) => <Fixture match={match} key={match.id} viewport={viewportSize} />)}
      </div>
    </section>
  );
};

export default Fixtures;
