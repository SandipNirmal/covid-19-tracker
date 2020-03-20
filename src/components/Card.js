import React from 'react';

function Card({ title, count }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h2 className="count">{count}</h2>
    </div>
  );
}

export default Card;
