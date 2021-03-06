import React, { useState, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import useStats from '../hooks/useStats';
import CountryItem from './CountryItem';
import Loader from './Loader';
import { CACHE_EXPIRY } from '../utils/response';

import '../styles/list.css';

import { combineCountryData, sortOptions } from '../utils/utils';

function CountryList() {
  const { stats, loading, error } = useStats(
    'https://covid19.mathdro.id/api/confirmed',
    CACHE_EXPIRY * 3
  );
  const [countryWiseStats, setCountryWiseStats] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);

  const hasError = error || stats ? stats.error : false;

  useEffect(() => {
    const { countriesData: data } = combineCountryData(stats);
    const val = 'confirmed';
    setCountryWiseStats(data);
    setUpdatedData(data.sort((a, b) => b[val] - a[val]));
  }, [stats]);

  const sortByCategory = (val) => {
    const data = countryWiseStats.slice();
    setUpdatedData(data.sort((a, b) => b[val] - a[val]));
  };

  const filterByCountry = (val) => {
    const data = countryWiseStats.slice();
    setUpdatedData(
      data.filter(({ country }) =>
        country.toLowerCase().includes(val.toLowerCase().trim())
      )
    );
  };

  const CountryRow = ({ index, style }) => {
    const { country, confirmed, recovered, deaths } = updatedData[index];

    return (
      <CountryItem
        title={country}
        count={{ confirmed, recovered, deaths }}
        key={country}
        style={style}
      />
    );
  };

  return (
    <div className="stats-container">
      <h2 className="stats-title">All Countries</h2>
      {loading ? <Loader /> : null}

      {stats && !loading ? (
        <>
          <div className="country-list-actions">
            <div>
              <label htmlFor="countries">Sort By:</label>
              <select
                id="countries"
                className="select"
                onChange={(e) => {
                  sortByCategory(e.target.value);
                }}
              >
                {Object.entries(sortOptions).map(([option, value]) => (
                  <option key={value} value={value}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="country">Country:</label>
              <input
                className="select"
                id="country"
                onChange={(e) => {
                  filterByCountry(e.target.value);
                }}
              />
            </div>
          </div>
          <p className="info">
            Total Affected Countries: <b>{countryWiseStats.length}</b>
          </p>

          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                height={500}
                width={width}
                itemSize={width > 480 ? 50 : 70}
                itemCount={updatedData.length}
                className="list-container"
              >
                {CountryRow}
              </FixedSizeList>
            )}
          </AutoSizer>
        </>
      ) : hasError ? (
        <h5>Error Loading Data.</h5>
      ) : null}
    </div>
  );
}

export default CountryList;
