import { useState, useEffect } from 'react';

import { responseCache, CACHE_EXPIRY } from '../utils/response';

function useStats(url, EXPIRY = CACHE_EXPIRY) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();

      if (responseCache[url] && responseCache[url].expiry > Date.now()) {
        setStats(responseCache[url].data);
        setLoading(false);
      } else {
        const data = await fetch(url)
          .then((res) => res.json())
          .catch((err) => {
            setError(err || 'Failed to load data!');
          });

        if (data) {
          setStats(data);
          responseCache[url] = {
            data,
            expiry: Date.now() + EXPIRY,
          };
        } else {
          setError('Failed to load data!');
        }
        setLoading(false);
      }
    }
    fetchData();
  }, [url, EXPIRY]);

  return {
    stats,
    loading,
    error,
  };
}

export default useStats;
