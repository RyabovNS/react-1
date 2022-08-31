import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png' alt='' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
