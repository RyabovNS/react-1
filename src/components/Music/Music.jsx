import styles from './Music.module.scss';

import workInProgressPng from '../../assets/images/work-in-progress.png';

const Music = () => {
  return (
    <div className={styles.container}>
      <img src={workInProgressPng} alt='Work in progress'></img>
    </div>
  );
};

export default Music;
