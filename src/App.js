import React from 'react';

import {
  Stats,
  Header,
  Footer,
  CountrySelector,
  CountryList,
  Tabs,
} from './components';
import useStats from './hooks/useStats';

import './App.css';

function App() {
  const tabs = [
    { name: 'Country List', component: <CountryList /> },
    {
      name: 'Country Select',
      component: <CountrySelector />,
    },
  ];

  const { stats } = useStats('https://covid19.mathdro.id/api/daily');
  let daily = {};

  if (stats && stats.length) {
    const index = stats.length - 1;

    daily = {
      confirmed: stats[index].confirmed.total,
      deaths: stats[index].deaths.total,
    };
  }

  return (
    <>
      <Header />
      <div className="container">
        <Stats title="Global" previousDay={daily} />
        <Tabs tabs={tabs} />
      </div>
      <Footer />
    </>
  );
}

export default App;
