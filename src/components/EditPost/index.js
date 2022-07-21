import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PostsContext } from '../../contexts/PostsContext';

function EditPost() {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);
  // const post = posts.find((post) => post.id === Number(postId));

  //нужна ли запись ниже или достаточно закомментированной строки?

  const [post, setPost] = useState({});

  useEffect(() => {
    const data = posts.find((post) => post.id === Number(postId));
    setPost(data);
  }, [postId, posts]);

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

        <textarea
          defaultValue={post.content}
          className="form-control"
          // autoFocus
        ></textarea>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
