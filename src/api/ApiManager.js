import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.football-data.org/v2',
  headers: { 'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_API_KEY },
});

export const getCurrentMatchDay = async () => {
  try {
    const response = await instance.get('/competitions/PL');
    return response.data.currentSeason.currentMatchday;
  } catch (e) {
    console.error(e);
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
  }
};
