import React from 'react';
import s from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post.jsx';

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch({ type:'ADD-POST' })
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
  }

  return (
    <div className={s.postWrapper}>
      My Posts
      <div className={s.post}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={ addPost }>Add Post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
