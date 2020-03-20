import React from 'react';

import { Stats, Header, Footer } from './components';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Stats title="Global" />
        <Stats title="India" url='https://covid19.mathdro.id/api/countries/IN'/>
      </div>
      <Footer />
    </>
  );
}

export default App;
