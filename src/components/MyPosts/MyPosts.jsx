import React from 'react';
import s from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post.jsx';

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }

  return (
    <div className={s.postWrapper}>
      My Posts
      <div className={s.post}>
        <textarea ref={newPostElement} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={ addPost }>Add Post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
