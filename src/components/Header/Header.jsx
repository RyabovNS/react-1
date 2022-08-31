import s from './Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header className={s.header}>
      <img
        src='https://w7.pngwing.com/pngs/818/848/png-transparent-coca-cola-pepsi-globe-logo-pepsi-beverage-can-red-pepsi-thumbnail.png'
        alt=''
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
