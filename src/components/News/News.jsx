import styles from './News.module.scss';

import workInProgressPng from '../../assets/images/work-in-progress.png';

const News = () => {
  return (
    <div className={styles.container}>
      <img src={workInProgressPng} alt='Work in progress'></img>
    </div>
  );
};

export default News;
