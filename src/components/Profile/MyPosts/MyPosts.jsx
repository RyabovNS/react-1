import React from 'react'
import Post from './MyPost/Post';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.AddPost(values.newPostText);
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostText"
                   component={Textarea}
                   validate={[required, maxLength10]}
                   placeholder={"Post message"}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;