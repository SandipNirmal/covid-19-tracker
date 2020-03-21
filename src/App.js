import React from 'react';

import { Stats, Header, Footer, CountrySelector } from './components';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Stats title="Global" />
        <CountrySelector />
      </div>
      <Footer />
    </>
  );
}

export default App;
