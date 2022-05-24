import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts}
					 newPostText={props.profilePage.newPostText}
					 dispatch={props.dispatch}/>
		</div>
	);
}

export default Profile;