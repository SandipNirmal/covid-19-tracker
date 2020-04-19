import React from 'react';

import '../styles/card.css';

const BACKGROUND_COLORS = {
  success: '#28a745',
  // success: '#009933',
  warning: '#ffc107',
  info: '#17a2b8',
  // danger: '#dc3545'
  danger: '#282f36'
};

const COLORS = {
  success: '#ffffff',
  warning: '#ffffff',
  info: '#ffffff',
  danger: '#ffffff',
  dark: '#282f36'
};

const getStyle = variant => {
  return variant
    ? {
        backgroundColor: BACKGROUND_COLORS[variant] || '#f6f6f6',
        color: COLORS[variant] || COLORS.dark
      }
    : {};
};

function Card({ title, count, total, variant }) {
  const percent = total ? ((count / total) * 100).toFixed(2) : 0;

  return (
    <div className="card" style={getStyle(variant)}>
      <h3 className="card-title">{title}</h3>

      <div className="card-info">
        <h2 className="count">{count.toLocaleString()}</h2>
        <h2 className="count">{`${percent}%`}</h2>
      </div>
    </div>
  );
}

export default Card;
