import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store';

import './scss/App.scss';

import welcomeLogoPng from './assets/images/welcome.png';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import UsersContainer from './components/Users/UsersContainer';
import withRouter from './components/common/Legacy/withRouter';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className='wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='content'>
          <React.Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }>
            <Routes>
              <Route
                path='/'
                element={
                  <div className='welcome'>
                    <img src={welcomeLogoPng} alt='' width='380'></img>
                  </div>
                }
              />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const ReactJSApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default ReactJSApp;
