import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

import socialNetworkLogoSvg from '../../assets/images/social-network-logo.svg';

const Header = props => {
  return (
    <header>
      <div className={styles.container}>
        <NavLink to='/'>
          <div className={styles.logo}>
            <img src={socialNetworkLogoSvg} alt='Social Network Logo' />
            <div>
              <h1>Social Network</h1>
              <p>общение без ограничений</p>
            </div>
          </div>
        </NavLink>
        <div className={styles.login}>
          {props.isAuth ? (
            <div className={styles.button}>
              {props.login}
              <button onClick={props.logout} className={styles.auth}>
                Log out
              </button>
            </div>
          ) : (
            <NavLink to={'login'} className={styles.auth}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
