import React from 'react';
import config from '../../config';

import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const component = ({ children, ...props }) => {
    return (
      <Block className={`border-${size}`} {...props}>
        {children}
      </Block>
    );
  };

  components.push(component);
}

export default components;
