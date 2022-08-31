import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [active, onActive] = useState(null);

  const links = ['/profile', '/dialogs', '/users', '/news', '/music', '/settings'];
  const linksName = ['Profile', 'Messages', 'Users', 'News', 'Music', 'Settings'];

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <NavLink to={link}>
            <li
              key={index}
              onClick={() => onActive(index)}
              className={active === index ? styles.active : ''}>
              {linksName[index]}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
