import React, { useState } from 'react';

import Stats from './Stats';
import { ISO3CountryCodes } from '../utils/countries';

function CountrySelector() {
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  return (
    <>
      <div className="selector">
        <select
          onChange={e => {
            setSelectedCountryCode(e.target.value);
          }}
        >
          <option value="">Select Country</option>
          {Object.entries(ISO3CountryCodes).map(([code, country]) => (
            <option key={code} value={code}>
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
