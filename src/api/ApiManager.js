import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_API_KEY,
  },
});

export const getStandings = async () => {
  try {
    const response = await instance.get(`/competitions/PL/standings`);
    return response.data.standings[0].table;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getGoalScorers = async () => {
  try {
    const response = await instance.get('/competitions/PL/scorers');
    console.log(response.scorers);
    return response.scorers;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getCurrentMatchDay = async () => {
  try {
    const response = await instance.get('/competitions/PL');
    return response.data.currentSeason.currentMatchday;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getFixturesByMatchday = async (matchday) => {
  try {
    const response = await instance.get(
      `/competitions/PL/matches?matchday=${matchday}`
    );
    return response.data.matches;
  } catch (e) {
    console.error(e);
    return null;
  }
};
