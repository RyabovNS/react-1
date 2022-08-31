import styles from './Settings.module.scss';

import workInProgressPng from '../../assets/images/work-in-progress.png';

const Settings = () => {
  return (
    <div className={styles.container}>
      <img src={workInProgressPng} alt='Work in progress'></img>
    </div>
  );
};

export default Settings;
