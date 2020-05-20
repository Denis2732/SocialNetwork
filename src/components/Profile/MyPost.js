import React from 'react';
import './Profile.css';
import Post from './Post.js';


const MyPost = (props) => {
  let postElement = props.posts.map(p => <Post message={p.message} key={p.id} />);
  let newPostElement = React.createRef();
  let text = () => {
    props.addPostAction();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.upDateNewPostText(text);
  }

  return (
    <div className='my-post'>
      <h2>Мои посты</h2>
      <textarea onChange={onPostChange} ref={newPostElement} className='input' value={props.newPostText} />
      <button className='btn' onClick={text}>Запостить</button>
      {postElement}
    </div>
  );
}

export default MyPost;
