import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getCurrentMatchDay, getFixturesByMatchday } from '../api/ApiManager';

const Fixture = ({ match }) => {
  const duration = match.score.duration;
  const { status, utcDate } = match;
  const { winner } = match.score;

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
  } else if (status === 'LIVE') {
    // todo
    matchStatus = 'Live';
  } else if (status === 'FINISHED') {
    // todo
    matchStatus = 'final';
  }

  // console.log(moment(utcDate).format('ddd MMM Do, YYYY h:mma'));

  return (
    <div className="Fixtures--match" key={match.id}>
      <div className="dates">
        <div className="time">{moment(utcDate).format('h:mma')}</div>
        <div className="date">{moment(utcDate).format('M/DD')}</div>
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
  const [currentMatchday, setCurrentMatchday] = useState();
  const [fixtures, setFixtures] = useState();

  useEffect(() => {
    const init = async () => {
      const _matchday = await getCurrentMatchDay();
      setCurrentMatchday(_matchday);
      const _fixtures = await getFixturesByMatchday(_matchday);
      console.log(_fixtures);
      setFixtures(_fixtures);
    };
    init();
  }, []);

  return (
    <section id="Fixtures" className="Fixtures">
      <h2>Fixtures</h2>
      {currentMatchday && <h4>{`Matchweek ${currentMatchday}`}</h4>}
      {fixtures &&
        fixtures.map((match) => <Fixture match={match} key={match.id} />)}
    </section>
  );
};

export default Fixtures;
