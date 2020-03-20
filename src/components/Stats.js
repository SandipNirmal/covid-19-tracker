import React from 'react';

import Card from './Card';
import useStats from '../hooks/useStats';

function Stats({ title, url = 'https://covid19.mathdro.id/api' }) {
  const { stats, error, loading } = useStats(url);

  console.log(stats);
  console.log(error);
  console.log(loading);

  if (loading) return 'Loading...';
  if (error) return <h3>{error}</h3>;

  return (
    <div className="stats-container">
      <h4 className="stats-title">{title}</h4>
      {stats ? (
        <div className="card-container">
          <Card title="Total" count={stats.confirmed.value} />
          <Card title="Recoverd" count={stats.recovered.value} />
          <Card title="Death" count={stats.deaths.value} />
          <Card
            title="Recovery %"
            count={`${(
              (stats.recovered.value / stats.confirmed.value) *
              100
            ).toFixed(2)}%`}
          />
          <Card
            title="Death %"
            count={`${(
              (stats.deaths.value / stats.confirmed.value) *
              100
            ).toFixed(2)}%`}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Stats;
