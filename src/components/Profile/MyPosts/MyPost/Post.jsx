import styles from './Post.module.scss';

import postAvatarSvg from '../../../../assets/images/post-avatar.svg';

const Post = props => {
  return (
    <div className={styles.post}>
      <img src={postAvatarSvg} alt='' />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
