import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewPost() {
  const emptyFormState = { content: '' };
  const [form, setForm] = useState(emptyFormState);
  let navigate = useNavigate();
  const post = { id: 0, content: form.content.trim() };

  const handleAdd = (evt) => {
    evt.preventDefault();
    if (form.content.trim() === '') {
      return;
    }

    fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      body: JSON.stringify(post),
    }).then(() => {
      navigate('/posts');
    });
  };

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  return (
    <div className="card">
      <div className="card-body">
        <form className="newPost" onSubmit={handleAdd}>
          <Link to={'/posts'}>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </Link>

          <div className="mb-3">
            <h5 className="card-title">New post</h5>
            <input
              type="text"
              className="form-control"
              aria-describedby="postTextInput"
              placeholder="Enter text here..."
              id="content"
              value={form.content}
              onChange={handleChange}
              required
            />
          </div>

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

export default NewPost;
