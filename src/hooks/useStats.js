import { useState, useEffect } from 'react';

function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err || 'Failed to load data!');
        });
      data ? setStats(data) : setError('Failed to load data!');
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return {
    stats,
    loading,
    error
  };
}

export default useStats;
