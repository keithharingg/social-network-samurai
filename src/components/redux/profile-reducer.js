import { usersAPI } from '../../api/api';
import { profileAPI } from '../../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
      posts: [
        { message: 'Hi, how are you?', id: 1, likesCount: 11 },
        { message: 'It is my first post', id: 2, likesCount: 23 }
      ],
      profile: null,
      status: ''
    }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        message: action.newPostText,
        id: 5,
        likesCount: 0
      };

      return {...state,
        posts: [...state.posts, newPost],
        newPostText: ''}
    
    case SET_USER_PROFILE: 
      return {...state,
        profile: action.profile
      }
      
      case SET_STATUS: 
      return {...state,
        status: action.status
      }    
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST, newPostText
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  })
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  })
};

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  })
};

export default profileReducer;
