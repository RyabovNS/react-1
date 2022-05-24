import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='https://www.ave-canada.online/wp-content/uploads/2019/11/ouest_-_moraine_lake_1.png' />
			</div>
			<div className={s.descriptionBlock}>
				ava + desc
			</div>
		</div>
	);
}

export default ProfileInfo;