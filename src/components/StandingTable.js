import React from 'react';

const StandingTable = ({ data }) => {
  const table = data.standings[0].table;
  console.log(table);
  return (
    <div className="StandingTable">
      <>
        <div className="table-headers">
          <span></span>
          <span className="team">Team</span>
          <span className="won">Won</span>
          <span className="lost">Lost</span>
          <span className="draw">Draw</span>
          <span className="points">Points</span>
        </div>
        {table.map((item) => (
          <div className="Table-item" key={item.position}>
            <span>
              <img
                className="crest"
                src={item.team.crestUrl}
                alt="Crest Logo"
              />
            </span>
            <span className="team">{item.team.name}</span>
            <span className="won">{item.won}</span>
            <span className="lost">{item.lost}</span>
            <span className="draw">{item.draw}</span>
            <span className="points">{item.points}</span>
          </div>
        ))}
      </>
    </div>
  );
};

export default StandingTable;
