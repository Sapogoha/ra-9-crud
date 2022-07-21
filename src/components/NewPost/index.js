import React from 'react';
import { Link } from 'react-router-dom';

function NewPost() {
  return (
    <div className="card">
      <div className="card-body">
        <form className="newPost">
          <Link to={'/'}>
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
              id="newPost"
              aria-describedby="postTextInput"
              placeholder="Enter text here..."
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
