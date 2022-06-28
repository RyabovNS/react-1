import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'It\'s my first post', likesCount: 100},
        {id: 3, message: 'Blala', likesCount: 10},
        {id: 4, message: 'Dada', likesCount: 30},
    ],
    newPostText: '123',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (id) => (dispatch) => {
    profileAPI
        .getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}
export const getStatus = (id) => (dispatch) => {
    profileAPI
        .getStatus(id)
        .then(data => {
            dispatch(setStatus(data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI
        .updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));

            }
        })
}

export default profileReducer;