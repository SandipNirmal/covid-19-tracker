import React from 'react';

import Card from './Card';
import Loader from './Loader';
import useStats from '../hooks/useStats';

function Stats({ title, url = 'https://covid19.mathdro.id/api' }) {
  const { stats, error, loading } = useStats(url);

  return (
    <div className="stats-container">
      <h2 className="stats-title">{title}</h2>

      {error ? <h3>{error}</h3> : null}
      {loading ? <Loader /> : null}

      {stats && !loading ? (
        <>
          <div className="confirmed">
            <h5>Total Confirmed</h5>
            <h3>{stats.error ? 0 : stats.confirmed.value.toLocaleString()}</h3>
          </div>
          <div className="card-container">
            <Card
              title="Recovered"
              count={stats.error ? 0 : stats.recovered.value}
              total={stats.error ? 0 : stats.confirmed.value}
              variant="success"
            />
            <Card
              title="Death"
              count={stats.error ? 0 : stats.deaths.value}
              total={stats.error ? 0 : stats.confirmed.value}
              variant="danger"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Stats;
