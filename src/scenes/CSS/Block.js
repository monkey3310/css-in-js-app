import React from 'react';

import './styles.css';

const Block = ({ i, className, children }) => {
  const color = i % 2 == 0 ? 'bg-blue' : 'bg-red';
  return <div className={`primary ${color} ${className}`}>{children}</div>;
};

export default Block;
