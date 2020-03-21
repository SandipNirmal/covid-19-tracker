import React from 'react';

function CountItem({ count, type }) {
  return (
    <div>
      <h5 className={`color-${type}`}>{count}</h5>
      <p>{type}</p>
    </div>
  );
}

function CountryItem({ title, count: { confirmed, recovered, deaths } }) {
  return (
    <div className="list-item">
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="count">
        <CountItem count={confirmed} type="confirmed" />
        <CountItem count={recovered} type="recovered" />
        <CountItem count={deaths} type="deaths" />
      </div>
    </div>
  );
}

export default CountryItem;
