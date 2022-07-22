import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PostsContext } from '../../contexts/PostsContext';

import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function PostOpened() {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);
  const [post, setPost] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    const data = posts.find((post) => post.id === Number(postId));
    setPost(data);
  }, [postId, posts]);

  const handleRemove = async (id) => {
    await fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/posts');
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="post-close">
          <Link to={'/posts'}>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </Link>
        </div>
        <h5 className="card-title">
          Post №{post.id}{' '}
          <p className="card-text time">{dayjs(post.created).fromNow()}</p>
        </h5>
        <p className="card-text">{post.content}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to={`/posts/${post.id}/edit`}>
            <button className="btn btn-primary me-md-2 edit" type="button">
              Edit
            </button>
          </Link>

          <button
            className="btn btn-danger me-md-2  delete "
            type="button"
            onClick={() => {
              handleRemove(post.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostOpened;
