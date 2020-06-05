import React, { lazy, Suspense } from 'react';

import {
  Stats,
  Header,
  //  Footer,
  Tabs,
} from './components';
import useStats from './hooks/useStats';

import './App.css';

const CountryList = lazy(() => import('./components/CountryList'));
const CountrySelector = lazy(() => import('./components/CountrySelector'));

function App() {
  const tabs = [
    {
      name: 'Country List',
      component: (
        <Suspense fallback={<div>Loading...</div>}>
          <CountryList />
        </Suspense>
      ),
    },
    {
      name: 'Country Select',
      component: (
        <Suspense fallback={<div>Loading...</div>}>
          <CountrySelector />
        </Suspense>
      ),
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
      {/* <Footer /> */}
    </>
  );
}

export default App;
