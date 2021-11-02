import React, { createContext, useState, useEffect } from 'react';
import {
  getStandings,
  getGoalScorers,
  getCurrentMatchDay,
  getFixturesByMatchday,
} from '../api/ApiManager';

export const SoccerContext = createContext();

export const SoccerContextProvider = ({ children }) => {
  const [standings, setStandings] = useState([]);
  const [goalScorers, setGoalScorers] = useState([]);
  const [matchDay, setMatchDay] = useState();
  const [matches, setMatches] = useState([]);

  const contextValue = {
    standings,
    goalScorers,
    matchDay,
    matches,
  };

  useEffect(() => {
    const init = async () => {
      const _standings = await getStandings();
      setStandings(_standings);
      const _scorers = await getGoalScorers();
      setGoalScorers(_scorers);
      const _matchday = await getCurrentMatchDay();
      setMatchDay(_matchday);
      const _fixtures = await getFixturesByMatchday(_matchday);
      setMatches(_fixtures);
    };
    init();
  }, []);

  return (
    <SoccerContext.Provider value={contextValue}>
      {children}
    </SoccerContext.Provider>
  );
};

export default SoccerContext;
