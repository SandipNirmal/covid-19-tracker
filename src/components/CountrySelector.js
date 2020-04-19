import React, { useState } from 'react';

import Stats from './Stats';
import { ISO3CountryCodes } from '../utils/utils';

function CountrySelector() {
  const [selectedCountryCode, setSelectedCountryCode] = useState('IND');

  return (
    <>
      <div className="selector">
        <label htmlFor="country">Select Country:</label>
        <select
          id="country"
          className="select"
          onChange={(e) => {
            setSelectedCountryCode(e.target.value);
          }}
          defaultValue={selectedCountryCode}
        >
          <option value="">Select Country</option>
          {Object.entries(ISO3CountryCodes).map(([code, country]) => (
            <option
              // defaultValue={selectedCountryCode}
              key={code}
              value={code}
            >
              {country}
            </option>
          ))}
        </select>
      </div>
      {selectedCountryCode ? (
        <Stats
          title={ISO3CountryCodes[selectedCountryCode]}
          url={`https://covid19.mathdro.id/api/countries/${selectedCountryCode}`}
        ></Stats>
      ) : null}
    </>
  );
}

export default CountrySelector;
