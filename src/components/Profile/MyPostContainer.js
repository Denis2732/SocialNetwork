import React from 'react';
import MyPost from './MyPost.js';
import { addPostActionCreated, upDateNewPostTextActionCreated } from './../../redux/reduser-profile';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPostAction: () => {
      dispatch(addPostActionCreated());
    },
    upDateNewPostText: (text) => {
      let action = upDateNewPostTextActionCreated(text);
      dispatch(action);
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
