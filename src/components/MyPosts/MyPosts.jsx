import React from 'react';
import s from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from "../../utils/validators/validators"
import {Textarea} from "../common/FormsControls/FormsControls.js"

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postWrapper}>
      <h3>My Posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.post}>
      <div>
        <Field
          component={Textarea}
          placeholder="Enter your post..."
          name="newPostText"
          validate={[required, maxLengthCreator(10)]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

export default MyPosts;
