import React from 'react';
import STANDINGS_DATA from '../data/standings';
import StandingTable from './StandingTable';

const Standings = () => {
  return (
    <section id="Standings">
      <h2>Standings</h2>
      <StandingTable data={STANDINGS_DATA} />
    </section>
  );
};

export default Standings;
