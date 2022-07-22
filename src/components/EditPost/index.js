import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { PostsContext } from '../../contexts/PostsContext';

function EditPost() {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);
  let navigate = useNavigate();
  const emptyFormState = { content: '' };

  const [post, setPost] = useState({});
  const [form, setForm] = useState(emptyFormState);

  useEffect(() => {
    const data = posts.find((post) => post.id === Number(postId));
    setPost(data);
  }, [postId, posts]);

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const handleSave = (evt) => {
    evt.preventDefault();
    const editedPost = { id: post.id, content: form.content.trim() };

    if (form.content.trim() === '') {
      return;
    }

    fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      body: JSON.stringify(editedPost),
    }).then(() => {
      navigate('/posts');
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="post-close">
          <Link to={`/posts/${post.id}`}>
            {' '}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </Link>
        </div>

        <h5 className="card-title">Post №{post.id}</h5>

        <form className="newPost" onSubmit={handleSave}>
          <textarea
            defaultValue={post.content}
            className="form-control"
            id="content"
            required
            value={form.content}
            onChange={handleChange}
            // autoFocus
          ></textarea>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
