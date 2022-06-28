import s from './ProfileInfo.module.css';

import Preloader from "../../common/Preloader/Preloader";

import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

	if(!props.profile){
		return <Preloader/>
	}

	return (
		<div>
			{/*<div>*/}
			{/*	<img src='https://www.artcontext.info/images/stories/pic88/2/pasted%20image%2001.png' />*/}
			{/*</div>*/}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large}/>
				<ProfileStatus status={props.status}
							   updateStatus={props.updateStatus}/>
			</div>
		</div>
	);
}

export default ProfileInfo;