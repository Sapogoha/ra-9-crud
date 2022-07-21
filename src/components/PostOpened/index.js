import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostsContext } from '../../contexts/PostsContext';

function PostOpened() {
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
          <Link to={'/'}>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </Link>
        </div>
        <h5 className="card-title">Post №{post.id}</h5>
        <p className="card-text">{post.content}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to={`/posts/${post.id}/edit`}>
            <button className="btn btn-primary me-md-2 edit" type="button">
              Edit
            </button>
          </Link>

          <button className="btn btn-danger me-md-2  delete " type="button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostOpened;
