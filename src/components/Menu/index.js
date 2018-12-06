import React from 'react';
import './Menu.css';

const Menu = ({ props }) => {
  return (
    <nav className="nav-holder">
      {/* <Box center style={{ marginBottom: '20px' }}>
        <a
          style={{ color: '#ccc' }}
          href="https://github.com/tuchk4/css-in-js-app"
          target="blank"
        >
          tuchk4/css-in-js-app
        </a>
      </Box> */}
      <button className="header-btn" type="button">
        <span />
      </button>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-item-link" href="#/aphrodite">
            Aphrodite
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/react-fela">
            React Fela
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/react-jss">
            React Jss
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-link" href="#/styled-components">
            Styled Components
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
