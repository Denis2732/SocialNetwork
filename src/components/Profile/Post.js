import React from 'react';
import './Profile.css';

const Post = (props) => {
  return (
  <div className='post'>
  		<img src="https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"/>
        <p>{props.message}</p>
  </div>
  );
}


export default Post;
