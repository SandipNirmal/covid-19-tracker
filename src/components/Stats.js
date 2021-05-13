import React from 'react';

import Card from './Card';
import Loader from './Loader';
import useStats from '../hooks/useStats';
import { CACHE_EXPIRY } from '../utils/response';

import '../styles/stats.css';

function Stats({
  title,
  url = 'https://covid19.mathdro.id/api',
  previousDay: { confirmed, deaths } = {},
}) {
  const { stats, error, loading } = useStats(url, CACHE_EXPIRY * 3);
  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

  return (
    <div className="stats-container">
      <h2 className="stats-title">{title}</h2>

      {error ? <h4 className="error">{error}</h4> : null}
      {loading ? <Loader /> : null}

      {stats && !loading && !error ? (
        <>
          <div className="confirmed-container">
            <div className="confirmed">
              <h5>Total Confirmed</h5>
              <div className="numbers">
                <h3>
                  {stats.error ? 0 : stats.confirmed.value.toLocaleString()}
                </h3>
//                 {confirmed ? (
//                   <span>
//                     ( ↑ {(stats.confirmed.value - confirmed).toLocaleString()} )
//                   </span>
//                 ) : null}
              </div>
            </div>
            {stats.error ? null : (
              <p className="last-updated">
                Last Updated: {formatDate(stats.lastUpdate)}
              </p>
            )}
          </div>
          <div className="card-container">
            <Card
              title="Recovered"
              count={stats.error ? 0 : stats.recovered.value}
              total={stats.error ? 0 : stats.confirmed.value}
              variant="success"
            />
            <Card
              title="Deaths"
              count={stats.error ? 0 : stats.deaths.value}
              increase={
                deaths && (stats.deaths.value - deaths).toLocaleString()
              }
              total={stats.error ? 0 : stats.confirmed.value}
              variant="danger"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default React.memo(Stats);
